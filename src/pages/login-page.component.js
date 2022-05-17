import { Fragment } from "react";
import { signInWithGooglePopup } from '../utils/firebase.utils';

const LoginPage = () => {
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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
