import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsREQUEST);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => dispatch(fetchCommentsSUCCESS(comments)))
      .catch((error) => dispatch(fetchCommentsFAILURE(error)));
  };
};

export const fetchCommentsFAILURE = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

export const fetchCommentsREQUEST = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchCommentsSUCCESS = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};
