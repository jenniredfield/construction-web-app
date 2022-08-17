import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "greeting"])),
      // Will be passed to the page component as props
      someProps: "hello",
    },
  };
}

function Products({ props }) {
  console.log("🚀 ~ file: products.js ~ line 14 ~ Products ~ props", props);
  const { t } = useTranslation(["common"]);

  return <div>{t("greeting")}</div>;
}

export default Products;
