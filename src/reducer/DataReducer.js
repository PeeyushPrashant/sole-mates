import { ACTION_TYPE } from "../utils/ActionType";

const InitialValue = {
  videos: [],
  watchlater: [],
  liked: [],
  playlists: [],
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
    case ACTION_TYPE.PLAYLIST:
      return { ...state, playlists: action.payload };
    case ACTION_TYPE.VIDEO_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((list) =>
          list._id === action.payload._id ? action.payload : list
        ),
      };
    default:
      return state;
  }
};
export { InitialValue, DataReducer };
