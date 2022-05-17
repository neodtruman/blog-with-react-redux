import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "./store/user/user.action";
import { onAuthStateChangedListener } from "./utils/firebase.utils";

import HomePage from "./pages/home-page.component";
import PostsRoutes from './pages/posts-routes.component';
import LoginPage from "./pages/login-page.component";
import Navigation from "./components/navigation.component";

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
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
          path="/posts/*"
          element={<PostsRoutes />} />
        <Route
          path="/login"
          element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
