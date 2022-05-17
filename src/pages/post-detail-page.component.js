import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { selectBookmarkItems } from '../store/bookmark/bookmark.selector';
import { addItemToBookmarks } from '../store/bookmark/bookmark.action';
import { getPostById } from '../utils/firebase.utils';
import { fetchData } from '../utils/fetch-data.utils';
import { getShortDate } from '../utils/datetime.utils';

import Comments from '../components/comment/comments.component';
import { ReactComponent as BookmarkIcon } from '../assets/icons/bookmark.svg';
import classes from './post-detail-page.styles.module.css';

function PostDetailPage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [postContent, setPostContent] = useState('');
  const [postInfo, setPostInfo] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const bookmarkItems = useSelector(selectBookmarkItems);
  const addPostToBookmark = () => dispatch(addItemToBookmarks(bookmarkItems, {
    data: postInfo,
    id: slug
  }));

  useEffect(() => {
    const url = `/contents/posts/${slug}.md`;
    const getContent = fetchData(url, 'md');

    const getInfo = getPostById(slug);

    Promise.all([getContent, getInfo])
      .then((res) => {
        setPostContent(res[0]);
        setPostInfo(res[1]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsPending(false);
      });
  }, [slug]);

  return (
    <Fragment>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {postInfo && <Fragment>
        <h1>
          <span>{postInfo.title}</span>
          <BookmarkIcon
            className={classes['bookmark-icon']}
            title="Bookmark this post"
            onClick={addPostToBookmark}
          />
          <div className={classes['post-date']}>
            Posted on {getShortDate(postInfo.date)}
          </div>
        </h1>
        <ReactMarkdown components={{
          img({ node }) {
            return (
              <span className={classes['image-container']}>
                <img
                  src={`/images/posts/${slug}/${node.properties.src}`}
                  alt={node.properties.alt}
                  width="600"
                  height="300"
                />
              </span>
            )
          }
        }}>{postContent}</ReactMarkdown>
        <Comments comments={postInfo.comments} postId={slug} />
      </Fragment>}
    </Fragment>
  )
}

export default PostDetailPage;
