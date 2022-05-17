import { Routes, Route } from 'react-router-dom';

import PostsPage from './posts-page.component';
import PostDetailPage from './post-detail-page.component';

const PostsRoutes = () => {
  return (
    <Routes>
      <Route index element={<PostsPage />} />
      <Route path=':slug' element={<PostDetailPage />} />
    </Routes>
  );
};

export default PostsRoutes;
