import axios from "axios";

const getAllVideos = async () => await axios.get("/api/videos");

const signUpServices = async (email, password, name) =>
  await axios.post("/api/auth/signup", { email, password, name });

const loginServices = async (email, password) =>
  await axios.post("/api/auth/login", { email, password });

export { getAllVideos, signUpServices, loginServices };
