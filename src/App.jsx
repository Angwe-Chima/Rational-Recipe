import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cuisine from "./pages/cuisine/Cuisine";
import CountryCategory from "./components/countryCategory/CountryCategory";
import Search from "./components/search/Search";
import Searched from "./pages/searched/Searched";

function App() {
  return (
    <>
      <Router>
        <Search/>
        <CountryCategory />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
