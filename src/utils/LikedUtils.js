import { ACTION_TYPE } from "./ActionType";
import { likedServices, removeLikedServices } from "../Services/services";

const removeFromLikedHandler = async (id, token, dispatch) => {
  try {
    const response = await removeLikedServices(id, token);
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.REMOVE_LIKED,
        payload: response.data.likes,
      });
  } catch (error) {
    console.error(error);
  }
};

export const LikedHandler = async (video, token, dispatch, isInLiked) => {
  try {
    if (isInLiked) {
      removeFromLikedHandler(video._id, token, dispatch);
    } else {
      const response = await likedServices(video, token);
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: ACTION_TYPE.ADD_LIKED, payload: response.data.likes });
      }
    }
  } catch (error) {
    console.error(error);
  }
};
