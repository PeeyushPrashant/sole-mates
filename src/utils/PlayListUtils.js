import {
  createNewPlaylistServices,
  addVideoToPlaylistServices,
  removePlayListServices,
  removeVideoFromPlayListServices,
} from "../Services/services";
import { ACTION_TYPE } from "./ActionType";

export const PlaylistHandler = async (token, name, dispatch) => {
  try {
    const response = await createNewPlaylistServices(name, token);
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.PLAYLIST,
        payload: response.data.playlists,
      });
  } catch (error) {
    console.error(error);
  }
};

export const addVideoToPlayList = async (id, video, token, dispatch) => {
  try {
    const response = await addVideoToPlaylistServices(id, video, token);
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.VIDEO_PLAYLIST,
        payload: response.data.playlist,
      });
  } catch (error) {
    console.error(error);
  }
};

export const removePlayList = async (id, token, dispatch) => {
  try {
    const response = await removePlayListServices(id, token);
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.PLAYLIST,
        payload: response.data.playlists,
      });
  } catch (error) {
    console.error(error);
  }
};

export const removeVideoFromPlayList = async (
  playlistId,
  videoId,
  token,
  dispatch
) => {
  try {
    const response = await removeVideoFromPlayListServices(
      playlistId,
      videoId,
      token
    );
    if (response.status === 200 || response.status === 201)
      dispatch({
        type: ACTION_TYPE.VIDEO_PLAYLIST,
        payload: response.data.playlist,
      });
  } catch (error) {
    console.error(error);
  }
};
