import "./search.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("searched/" + input);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="searchDivWrapper">
      {location.pathname.includes("searched") && (
        <div className="backIconDiv" onClick={handleBackClick}>
          <AiOutlineArrowLeft className="backIcon" />
        </div>
      )}
      <form className="searchDiv" onSubmit={submitHandler}>
        <div className="inputWrapper">
          <input
            type="text"
            value={input}
            placeholder="search recipe..."
            onChange={(e) => setInput(e.target.value)}
          />
          <AiOutlineSearch className="searchIcon" />
        </div>
      </form>
    </div>
  );
}

export default Search;
