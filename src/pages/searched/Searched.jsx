import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
      {searchedRecipes.map((recipe, idx) => (
        <div key={idx}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Searched;
