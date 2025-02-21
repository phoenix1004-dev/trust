import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./App.css";
import SafeSendPage from "./pages/SafeSendPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/safesend" element={<SafeSendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
