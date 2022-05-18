import { Fragment, useCallback } from "react";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../store/user/user.action";
import { signInWithGooglePopup } from '../utils/firebase.utils';

const LoginPage = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = useCallback(async () => {
    const response = await signInWithGooglePopup();
    dispatch(setCurrentUser(response.user));
  }, []);

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
