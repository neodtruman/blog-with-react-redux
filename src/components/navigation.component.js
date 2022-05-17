import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "../store/user/user.action";
import { selectCurrentUser } from '../store/user/user.selector';
import { signOutUser } from '../utils/firebase.utils';

import classes from './navigation.styles.module.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(setCurrentUser(null));
  }

  return (
    <header className={classes['header']}>
      <Link to='/' className={classes['nav-link']}>
        HOME
      </Link>
      <nav>
        <ul>
          <li >
            <Link to='/posts'
              className={classes['nav-link']}>
              Posts
            </Link>
          </li>
          {!currentUser && <li>
            <Link to='/login'
              className={classes['nav-link']}>
              Log In
            </Link>
          </li>}
          {currentUser && <li>
            <span onClick={signOutHandler}
              className={classes['nav-link']}>
              Logout
            </span>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
