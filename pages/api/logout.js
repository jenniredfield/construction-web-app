import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default async function handler(req, res) {
  if (req.method === "POST" && process.env.NEXT_PUBLIC_SEED_KEY) {
    try {
      auth()
        .signOut()
        .then(() => {
          res.send(200).json({ success: true });
        });
    } catch (err) {
      res.send(400);
    }
  }
}
