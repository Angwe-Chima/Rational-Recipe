import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./cuisine.css";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const getCuisine = (name) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
      )
      .then((response) => {
        setCuisine(response.data.results);
      });
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="resultDiv">
      {cuisine.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt="" />
            <p>{recipe.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cuisine;
