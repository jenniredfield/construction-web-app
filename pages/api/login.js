import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      console.log(
        "🚀 ~ file: login.js ~ line 6 ~ handler ~ email, password",
        email,
        password
      );

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
        throw {
          code: 500,
          message: "There was an error logging in. Please try again.",
          success: false,
        };
      }

      res.status(200).json({ userCredential, userProfile });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      res
        .status(500)
        .json({ message: "There was an error logging in. Please try again." });
    }
  }
}
