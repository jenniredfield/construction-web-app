import ProductsGrid from "../src/components/Products/ProductsGrid/ProductsGrid";

import {
  collection,
  getDocs,
  query as firebaseQuery,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";
import PageWrapper from "../src/components/Layout/Wrappers/PageWrapper";

export async function getServerSideProps({ locale, query }) {
  const { q } = query;

  let querySnapshot = [];
  if (q) {
    const productsRef = collection(db, "products");
    const actualQuery = await firebaseQuery(
      productsRef,
      where("product_type", "==", q?.toLowerCase())
    );

    querySnapshot = await getDocs(actualQuery);
  } else {
    querySnapshot = await getDocs(collection(db, "products"));
  }

  const products = [];

  querySnapshot?.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  //call own API
  return {
    props: {
      // Will be passed to the page component as props
      products,
    },
  };
}

function Products({ products, loading }) {
  console.log("loaded?");
  return (
    <PageWrapper loading={loading}>
      <ProductsGrid products={products} />
    </PageWrapper>
  );
}

export default Products;
