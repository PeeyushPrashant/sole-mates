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

export {
  getAllVideos,
  signUpServices,
  loginServices,
  watchLaterServices,
  removeWatchLaterServices,
  likedServices,
  removeLikedServices,
};
