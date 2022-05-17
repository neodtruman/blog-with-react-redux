import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../contexts/user.context';
import { signOutUser } from '../utils/firebase.utils';

import classes from './navigation.styles.module.css';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
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
