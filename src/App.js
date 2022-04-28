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
} from "../src/pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
