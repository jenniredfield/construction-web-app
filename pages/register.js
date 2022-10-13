import ContentLayout from "../src/components/Layout/ContentLayout/ContentLayout";
import PageWrapper from "../src/components/Layout/Wrappers/PageWrapper";
import RegisterComponent from "../src/components/Register/RegisterComponent";

function Register() {
  return (
    <PageWrapper>
      <ContentLayout>
        <RegisterComponent />
      </ContentLayout>
    </PageWrapper>
  );
}

export default Register;
