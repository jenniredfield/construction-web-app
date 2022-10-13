// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
// import { auth } from "../../firebase.config";
const auth = getAuth();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password, name, last_name } = req.body;
      // register user
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

      return res.status(200).json({ message: "success" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
}
