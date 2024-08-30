import { useState } from "react";
import "./countryCategory.css";
import {
  IoFastFoodOutline,
  IoPizzaOutline,
  IoArrowBack,
} from "react-icons/io5";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

function CountryCategory() {
  const [showBackButton, setShowBackButton] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => {
    setShowBackButton(true);
  };

  const handleBackClick = () => {
    setShowBackButton(false);
    navigate("/");
  };

  return (
    <div className="categoryDiv">
      {showBackButton && (
        <div onClick={handleBackClick} className="back">
          <IoArrowBack />
        </div>
      )}

      <NavLink
        to="/cuisine/american"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleNavClick}
      >
        <IoFastFoodOutline className="icon" />
        <p>American</p>
      </NavLink>
      <NavLink
        to="/cuisine/thai"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleNavClick}
      >
        <GiNoodles className="icon" />
        <p>Thai</p>
      </NavLink>
      <NavLink
        to="/cuisine/italian"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleNavClick}
      >
        <IoPizzaOutline className="icon" />
        <p>Italian</p>
      </NavLink>
      <NavLink
        to="/cuisine/japanese"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleNavClick}
      >
        <GiChopsticks className="icon" />
        <p>Japanese</p>
      </NavLink>
    </div>
  );
}

export default CountryCategory;
