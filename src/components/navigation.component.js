import { Link } from 'react-router-dom';

import { signOutUser } from '../utils/firebase.utils';

import classes from './navigation.styles.module.css';

const Navigation = () => {
  const signOutHandler = async () => {
    const response = await signOutUser();
    console.log(response);
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
          <li>
            <Link to='/login'
              className={classes['nav-link']}>
              Log In
            </Link>
          </li>
          <li>
            <span onClick={signOutHandler}
              className={classes['nav-link']}>
              Logout
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
