import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
    };
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button> Submit Comment</button>
        </div>
      </form>
    );
  }
}

const CommentBoxFC = (props) => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.saveComment(comment);

    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <button> Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, actions)(CommentBox);
export const CommentBoxRFC = connect(null, actions)(CommentBoxFC);
