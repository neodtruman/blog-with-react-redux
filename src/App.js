import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "./store/user/user.action";
import { onAuthStateChangedListener } from "./utils/firebase.utils";

import HomePage from "./pages/home-page.component";
import Navigation from "./components/navigation.component";
import PostsRoutes from "./pages/posts-routes.component";
import './App.css';

const BookmarksPage = lazy(() => import('./pages/bookmarks-page.component'));
const LoginPage = lazy(() => import('./pages/login-page.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route
          path="/bookmarks"
          element={<BookmarksPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
