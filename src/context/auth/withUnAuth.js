import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase.config";
// import { auth } from "../../firebase.config";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name
const withUnAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log(
        "🚀 ~ file: withUnAuth.js ~ line 17 ~ onAuthStateChanged ~ authUser",
        authUser
      );
      if (authUser) {
        router.push("/");
      }
    });
  }, [router]);

  return <Component {...props} />;
};

export default withUnAuth;
