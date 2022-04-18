import "./App.css";
import { Home, Login, SignUp, SingleVideo } from "../src/pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
