import { Fragment, useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../store/user/user.action";
import { signInWithGooglePopup } from '../utils/firebase.utils';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const doubleCounterOne = useCallback(() => {
    console.log('doubleCounterOne() called');
    return counterOne * 2;
  }, [counterOne]);

  const c1x2 = useMemo(() => doubleCounterOne(), [counterOne]);

  console.log('counterOne =', c1x2);

  const signInWithGoogle = useCallback(async () => {
    const response = await signInWithGooglePopup();
    dispatch(setCurrentUser(response.user));
  }, []);

  return (
    <Fragment>
      <h1>Login Page</h1>

      <div>
        <span>Counter 1: {counterOne}</span>
        <button onClick={() => setCounterOne(counterOne + 1)}>Increase Counter 1</button>
      </div>
      <div>
        <span>Counter 2: {counterTwo}</span>
        <button onClick={() => setCounterTwo(counterTwo + 1)}>Increase Counter 2</button>
      </div>

      <button onClick={signInWithGoogle}>
        Google Sign In
      </button>
    </Fragment>
  );
}

export default LoginPage;
