import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { db, auth } from "../../firebase.config";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(" user", user);
      try {
        if (user) {
          const uid = user.uid;

          const userRef = doc(db, "users", uid);
          const docSnap = await getDoc(userRef);

          let userProfile;

          if (docSnap.exists()) {
            userProfile = docSnap.data();
          } else {
            throw new Error("Error retrieving user");
          }
          setUser(userProfile);
        } else {
          setUser({});
        }
      } catch (err) {
        console.log("err", err);
        setUser({});
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signUp = async ({ email, password, name, last_name }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // save user details to Users collection
    await setDoc(doc(db, "users", user.uid), {
      name,
      last_name,
      email,
      db_id: user.uid,
    });

    setUser({ name, last_name, email });
  };

  const logIn = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userRef = doc(db, "users", userCredential.user.uid);
      const docSnap = await getDoc(userRef);

      let userProfile;

      if (docSnap.exists()) {
        userProfile = docSnap.data();
      } else {
        throw new Error("Error retrieving user");
      }
      setUser(userProfile);
    } catch (err) {
      console.log("err", err);
    }
  };

  const logOut = async () => {
    setUser({});
    await signOut(auth);
  };

  const value = {
    signUp,
    logIn,
    logOut,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
