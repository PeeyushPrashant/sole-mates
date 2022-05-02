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
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
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
