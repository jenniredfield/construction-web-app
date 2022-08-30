import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { Box } from "@mui/material";
import ProductsGrid from "../src/components/Products/ProductsGrid/ProductsGrid";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import PageWrapper from "../src/components/Layout/Wrappers/PageWrapper";

export async function getServerSideProps({ locale, query }) {
  const querySnapshot = await getDocs(collection(db, "products"));

  const products = [];

  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
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

function Products({ products }) {
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
    <PageWrapper>
      <Box maxWidth="800px" margin="0 auto">
        <ProductsGrid products={products} />
      </Box>
    </PageWrapper>
  );
}

export default Products;
