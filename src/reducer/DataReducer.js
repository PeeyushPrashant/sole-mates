import { ACTION_TYPE } from "../utils/ActionType";

const InitialValue = {
  videos: [],
  watchlater: [],
  liked: [],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA:
      return { ...state, videos: action.payload };
    case ACTION_TYPE.ADD_WATCH:
      return { ...state, watchlater: action.payload };
    case ACTION_TYPE.REMOVE_WATCH:
      return { ...state, watchlater: action.payload };
    case ACTION_TYPE.ADD_LIKED:
      return { ...state, liked: action.payload };
    case ACTION_TYPE.REMOVE_LIKED:
      return { ...state, liked: action.payload };
    default:
      return state;
  }
};
export { InitialValue, DataReducer };
