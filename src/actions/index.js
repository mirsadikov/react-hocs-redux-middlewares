import axios from "axios";
import { FETCH_COMMENTS, SAVE_COMMENT } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get(
    "https://jsonplaceholder.typicode.com/comments?postId=1"
  );

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}
