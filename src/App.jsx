import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cuisine from "./pages/cuisine/Cuisine";
import CountryCategory from "./components/countryCategory/CountryCategory";
import Search from "./components/search/Search";
import Searched from "./pages/searched/Searched";
import Recipe from "./pages/recipe/Recipe";
import logo from "./images/Rational-Recipe-Text-Logo.svg";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <img src={logo} alt="Rational Recipe Logo" />
        </Link>
      </nav>
      <Search />
      <CountryCategory />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
