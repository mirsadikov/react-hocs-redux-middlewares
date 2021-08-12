import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

// eslint-disable-next-line
export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
