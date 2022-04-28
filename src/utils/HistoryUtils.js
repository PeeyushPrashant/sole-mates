import {
  addToHistoryServices,
  removeFromHistoryServices,
} from "../Services/services";
import { ACTION_TYPE } from "./ActionType";

export const HistoryHandler = async (video, token, dispatch) => {
  try {
    const response = await addToHistoryServices(video, token);
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.ADD_HISTORY,
        payload: response.data.history,
      });
  } catch (error) {
    console.error(error);
  }
};

export const removeFromHistory = async (videoId, token, dispatch) => {
  try {
    const response = await removeFromHistoryServices(videoId, token);
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.ADD_HISTORY,
        payload: response.data.history,
      });
  } catch (error) {
    console.error(error);
  }
};
