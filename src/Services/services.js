import axios from "axios";

const getAllVideos = async () => await axios.get("/api/videos");

const signUpServices = async (email, password, name) =>
  await axios.post("/api/auth/signup", { email, password, name });

const loginServices = async (email, password) =>
  await axios.post("/api/auth/login", { email, password });

const watchLaterServices = async (video, token) =>
  await axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );

const removeWatchLaterServices = async (id, token) =>
  await axios.delete(`/api/user/watchlater/${id}`, {
    headers: {
      authorization: token,
    },
  });

const likedServices = async (video, token) =>
  await axios.post(
    "/api/user/likes",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );

const removeLikedServices = async (id, token) =>
  await axios.delete(`/api/user/likes/${id}`, {
    headers: {
      authorization: token,
    },
  });

const createNewPlaylistServices = async (name, token) =>
  await axios.post(
    "/api/user/playlists",
    {
      playlist: {
        title: name,
        description: "",
      },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

const addVideoToPlaylistServices = async (id, video, token) =>
  await axios.post(
    `/api/user/playlists/${id}`,
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );

const removePlayListServices = async (id, token) =>
  await axios.delete(`/api/user/playlists/${id}`, {
    headers: {
      authorization: token,
    },
  });

const removeVideoFromPlayListServices = async (playlistId, videoId, token) =>
  await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: {
      authorization: token,
    },
  });

export {
  getAllVideos,
  signUpServices,
  loginServices,
  watchLaterServices,
  removeWatchLaterServices,
  likedServices,
  removeLikedServices,
  createNewPlaylistServices,
  addVideoToPlaylistServices,
  removePlayListServices,
  removeVideoFromPlayListServices,
};
