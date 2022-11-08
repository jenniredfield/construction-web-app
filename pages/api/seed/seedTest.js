import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { products_tijolo, products_azulejo } from "./data.js";

export const seedProductsDB = async () => {
  try {
    [...products_azulejo, ...products_tijolo].forEach(async (product) => {
      const docRef = await addDoc(collection(db, "products"), {
        ...product,
      });
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (err) {
    console.log(err);
  }
};
