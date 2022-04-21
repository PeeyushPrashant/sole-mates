import "./App.css";
import { Home, Login, SignUp, SingleVideo, WatchLater } from "../src/pages";
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
      </Routes>
    </div>
  );
}

export default App;
