import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
