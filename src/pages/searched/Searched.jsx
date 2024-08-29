import "./searched.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = (name) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`
      )
      .then((response) => {
        setSearchedRecipes(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching the recipes:", error);
      });
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="resultDiv">
      {searchedRecipes.map((item, idx) => (
        <div key={idx}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Searched;
