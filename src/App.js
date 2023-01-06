import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./data.json";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination planetInfo={data.destinations} />}
        />
        <Route path="/crew" element={<Crew crewInfo={data.crew} />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
