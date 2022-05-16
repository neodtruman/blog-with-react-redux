import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page.component";
import PostsPage from './pages/posts-page.component';
import LoginPage from "./pages/login-page.component";

import './App.css';

const App = () => {
  return (
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
  );
}

export default App;
