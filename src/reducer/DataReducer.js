import { ACTION_TYPE } from "../utils/ActionType";

const InitialValue = {
  videos: [],
  categories: [],
  watchlater: [],
  liked: [],
  playlists: [],
  history: [],
  sortBy: "",
  search: "",
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA:
      return { ...state, videos: action.payload };
    case ACTION_TYPE.CATEGORY:
      return {
        ...state,
        categories: action.payload.map((cat) => ({
          ...cat,
          isActive: cat.categoryName === "All" ? true : false,
        })),
      };
    case ACTION_TYPE.SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
        categories: state.categories.map((cat) =>
          cat.categoryName === action.payload
            ? { ...cat, isActive: true }
            : { ...cat, isActive: false }
        ),
      };
    case ACTION_TYPE.SEARCH:
      return { ...state, search: action.payload };
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
    case ACTION_TYPE.ADD_HISTORY:
      return { ...state, history: action.payload };
    default:
      return state;
  }
};
export { InitialValue, DataReducer };
