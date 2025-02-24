import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./App.css";
import SafeSendPage from "./pages/SafeSendPage";
import AboutPage from "./pages/About";
import FeaturePage from "./pages/Features";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/safesend" element={<SafeSendPage />} />
        <Route path="/features" element={<FeaturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
