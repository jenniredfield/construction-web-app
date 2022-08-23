import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

export async function getServerSideProps({ locale, query }) {
  const querySnapshot = await getDocs(collection(db, "products"));

  const products = [];

  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  //call own API
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"])),
      // Will be passed to the page component as props
      products,
    },
  };
}

function Products(props) {
  console.log("🚀 ~ file: products.js ~ line 35 ~ Products ~ props", props);
  const { t } = useTranslation(["common", "main"]);

  const fetchHello = async () => {
    const res = await fetch("/api/hello");
    const json = await res.json();
  };

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const json = await res.json();
  };

  return (
    <div>
      <p>{t("greeting")}</p>
      <button onClick={fetchHello}>Hello</button>
      <button onClick={fetchProducts}>Fetch Products</button>
    </div>
  );
}

export default Products;
