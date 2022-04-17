import { ACTION_TYPE } from "../utils/ActionType";

const InitialValue = {
  videos: [],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA:
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};

export { InitialValue, DataReducer };
