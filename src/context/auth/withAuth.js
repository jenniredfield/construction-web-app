import React, { useEffect } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name
const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        router.push("/login");
      }
    });
  }, [router]);

  return <Component {...props} />;
};

export default withAuth;
