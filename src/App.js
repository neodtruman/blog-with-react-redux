import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page.component";
import PostsPage from './pages/posts-page.component';
import LoginPage from "./pages/login-page.component";
import Navigation from "./components/navigation.component";

import './App.css';

const App = () => {
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
