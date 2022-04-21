import { ACTION_TYPE } from "./ActionType";
import {
  watchLaterServices,
  removeWatchLaterServices,
} from "../Services/services";

export const WatchLaterHandler = async (
  video,
  token,
  dispatch,
  isInWatchLater
) => {
  try {
    if (isInWatchLater) {
      removeVideoFromWatchLater(video._id, token, dispatch);
    } else {
      const response = await watchLaterServices(video, token);
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ACTION_TYPE.ADD_WATCH,
          payload: response.data.watchlater,
        });
      }
    }
  } catch (error) {
    console.error();
  }
};

const removeVideoFromWatchLater = async (id, token, dispatch) => {
  try {
    const response = await removeWatchLaterServices(id, token);
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.REMOVE_WATCH,
        payload: response.data.watchlater,
      });
  } catch (error) {
    console.error();
  }
};
