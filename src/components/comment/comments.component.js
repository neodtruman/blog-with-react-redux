import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { signInWithGooglePopup } from '../../utils/firebase.utils';
import { getLongDatetime } from "../../utils/datetime.utils";
import { setCurrentUser } from "../../store/user/user.action";
import { selectCurrentUser } from '../../store/user/user.selector';

import NewComment from "./new-comment.component";
import classes from './comments.styles.module.css'

const Comments = ({ comments, postId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signInWithGoogle = useCallback(async () => {
    const response = await signInWithGooglePopup();
    dispatch(setCurrentUser(response.user));
  }, []);

  const updateComments = (newComments) => {
    setCommentList(newComments);
  }

  return <div>
    <hr />
    {!currentUser && <div className={classes['sign-in-wrapper']}>
      <span
        className={classes['lnk-sign-in']}
        onClick={signInWithGoogle}>
        Sign in
      </span>
      <span> to post your comment.</span>
    </div>}
    {currentUser && <NewComment postId={postId} updateComments={updateComments} userDisplayName={currentUser.displayName} />}

    {commentList && commentList
      .sort((a, b) => b.createdAt - a.createdAt)
      .map(c =>
        <div key={c.createdAt}>
          <div className={classes['comment-wrapper']}>
            <div className={classes['user']}>{c.user}</div>
            <div>{c.comment}</div>
            <div className={classes['comment-date']}>{getLongDatetime(c.createdAt)}</div>
          </div>
        </div>
      )
    }
  </div>
};

export default Comments;
