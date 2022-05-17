import { Fragment, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { UserContext } from './contexts/user.context';
import { onAuthStateChangedListener } from "./utils/firebase.utils";

import HomePage from "./pages/home-page.component";
import PostsPage from './pages/posts-page.component';
import LoginPage from "./pages/login-page.component";
import Navigation from "./components/navigation.component";

import './App.css';

const App = () => {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    })
    return unsubscribe;
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />} />
        <Route
          path="/posts"
          element={<PostsPage />} />
        <Route
          path="/login"
          element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
