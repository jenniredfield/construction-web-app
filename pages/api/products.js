import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
// testing function hitting firebase API, works fine!
export default async function handler(req, res) {
  const querySnapshot = await getDocs(collection(db, "products"));

  const products = [];

  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  res.status(200).json({ products });
}
