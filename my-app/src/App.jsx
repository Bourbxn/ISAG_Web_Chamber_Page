import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Achievement } from "./Pages/Achievement";
import { Navbar } from "./components/Navbar";
import { Notion } from "./Pages/Notion";
import { Chamber } from "./Pages/Chamber";

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/notion" element={<Notion />} />
          <Route path="/chamber" element={<Chamber />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
