import { Link } from 'react-router-dom';

import classes from './navigation.styles.module.css';

const Navigation = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
