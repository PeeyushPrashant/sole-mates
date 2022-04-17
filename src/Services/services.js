import axios from "axios";

const getAllVideos = async () => await axios.get("/api/videos");

export { getAllVideos };
