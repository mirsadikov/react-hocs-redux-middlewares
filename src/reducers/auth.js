import { CHANGE_AUTH } from "actions/types";

// eslint-disable-next-line
export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}
