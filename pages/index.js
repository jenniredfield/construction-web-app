import Head from "next/head";
import { Box, Typography } from "@mui/material";
import PageWrapper from "../src/components/Layout/Wrappers/PageWrapper";
import styles from "../styles/Home.module.css";
import CenteredLayout from "../src/components/Layout/CenteredLayout/CenteredLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <CenteredLayout>
          <Typography>Hello construction app</Typography>
        </CenteredLayout>
      </PageWrapper>
    </div>
  );
}
