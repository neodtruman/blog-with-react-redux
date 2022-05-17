import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

const PostsPage = lazy(() => import('./posts-page.component'));
const PostDetailPage = lazy(() => import('./post-detail-page.component'));

const PostsRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<PostsPage />} />
        <Route path=':slug' element={<PostDetailPage />} />
      </Routes>
    </Suspense>
  );
};

export default PostsRoutes;
