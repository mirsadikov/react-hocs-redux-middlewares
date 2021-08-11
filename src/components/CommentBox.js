import React, { useState } from "react";

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

    // Call an action creator
    // And save the comment

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

export { CommentBox };

// eslint-disable-next-line
export default () => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call an action creator
    // And save the comment

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
