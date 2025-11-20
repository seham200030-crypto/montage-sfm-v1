import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import TalkingAvatar from "./pages/TalkingAvatar";
import Voice from "./pages/Voice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/avatar" element={<TalkingAvatar />} />
        <Route path="/voice" element={<Voice />} />
      </Routes>
    </Router>
  );
}

export default App;
