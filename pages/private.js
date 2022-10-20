import { useUser } from "../src/context/auth/useUser";
import withAuth from "../src/context/auth/withAuth";

const Private = () => {
  const { user, logout } = useUser();
  return (
    <div>
      <div>Private</div>
      {user?.email && (
        <div>
          <div>Email: {user.email}</div>
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default withAuth(Private);
