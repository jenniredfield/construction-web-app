import { app } from "../../firebase.config";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { login, logout } from "../api";
import { getUserFromCookie, setTokenCookie, setUserCookie } from "./auth/auth";

const auth = getAuth();

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState({});
  const router = useRouter();
  //   const navigate = useNavigate();app
  //   const location = useLocation();
  const handleLogin = async (data) => {
    try {
      const response = await login(data);
      console.log(
        "🚀 ~ file: AuthProvider.jsx ~ line 15 ~ handleLogin ~ response",
        response
      );

      setTokenCookie(response?.userCredential?._tokenResponse?.idToken);
      setUserCookie(JSON.stringify(response?.userProfile));
      setProfile(response?.userProfile);

      //   router("/private");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await logout();
      if (!res.success) {
      }
      setTokenCookie(null);
      setUserCookie(null);
      setProfile({});
      //   router("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("effect?");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(
          "🚀 ~ file: AuthProvider.jsx ~ line 55 ~ onAuthStateChanged ~ user",
          user
        );
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        const userFromCookie = getUserFromCookie();
        if (!userFromCookie) {
          return;
        }
        setProfile(userFromCookie);
      } else {
        // User is signed out
        // ...
        console.log("no user?!?!?");
        setTokenCookie(null);
        setUserCookie(null);
        setProfile({});
      }
    });
  }, []);

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    profile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
