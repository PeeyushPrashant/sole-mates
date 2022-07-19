import "./App.css";
import {
  Home,
  Login,
  SignUp,
  SingleVideo,
  WatchLater,
  Liked,
  PlayList,
  PlayListVideos,
  History,
  ProfilePage,
} from "../src/pages";
import { Loader } from "./components";
import { Routes, Route } from "react-router-dom";
import { useData, useTheme } from "./contexts";

function App() {
  const { theme } = useTheme();
  const { loader } = useData();
  return (
    <div className="App" data-theme={theme}>
      {loader && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/playlist/:playlistId" element={<PlayListVideos />} />
        <Route path="/history" element={<History />} />
        <Route path="/user_profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
