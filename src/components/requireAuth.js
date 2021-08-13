import React from "react";
import { connect } from "react-redux";

// eslint-disable-next-line
export default (ChildComponent) => {
  class ComposedComponent extends React.Component {
    shouldNavigate() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    componentDidMount() {
      this.shouldNavigate();
    }

    componentDidUpdate() {
      this.shouldNavigate();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
