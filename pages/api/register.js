// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase.config";
const auth = getAuth();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      return res.status(400);
    }
  }
}
