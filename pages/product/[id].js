import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import PageWrapper from "../../src/components/Layout/Wrappers/PageWrapper";
import ProductComponent from "../../src/components/Product/Product";

export async function getServerSideProps({ locale, query }) {
  const { id } = query;

  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  let product = {};

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    product = docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  //call own API
  return {
    props: {
      // Will be passed to the page component as props
      product,
    },
  };
}

function Product({ product }) {
  console.log("loaded?");
  return (
    <PageWrapper>
      <ProductComponent product={product} />
    </PageWrapper>
  );
}

export default Product;
