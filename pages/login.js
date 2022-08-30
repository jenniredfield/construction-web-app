import PageWrapper from "../src/components/Layout/Wrappers/PageWrapper";
import ContentLayout from "../src/components/Layout/ContentLayout/ContentLayout";
import LoginComponent from "../src/components/Login/LoginComponent";

function Login() {
  return (
    <PageWrapper>
      <ContentLayout>
        <LoginComponent />
      </ContentLayout>
    </PageWrapper>
  );
}

export default Login;
