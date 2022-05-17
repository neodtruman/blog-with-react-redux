import { Fragment, useContext } from "react";

import { signInWithGooglePopup } from '../utils/firebase.utils';
import { UserContext } from "../contexts/user.context";

const LoginPage = () => {
  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    setCurrentUser(response.user);
  };

  return (
    <Fragment>
      <h1>Login Page</h1>

      <button onClick={signInWithGoogle}>
        Google Sign In
      </button>
    </Fragment>
  );
}

export default LoginPage;
