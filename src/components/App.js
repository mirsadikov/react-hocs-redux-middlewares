import CommentBox, { CommentBoxRFC } from "components/CommentBox";
import CommentList from "components/CommentList";

// eslint-disable-next-line
export default () => {
  return (
    <div>
      <CommentBox />
      <CommentBoxRFC />
      <CommentList />
    </div>
  );
};
