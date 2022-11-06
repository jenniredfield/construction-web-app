import * as React from "react";
import { Router } from "next/router";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import "../firebase.config";
import theme from "../src/theme/theme";
import createEmotionCache from "../src/theme/createEmotionCache";
import { AuthProvider } from "../src/context/AuthProvider";

import ShopProvider from "../src/context/ShopProvider";

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <ShopProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}

            <CssBaseline />
            <Component {...pageProps} loading={loading} />
          </ThemeProvider>
        </ShopProvider>
      </AuthProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
