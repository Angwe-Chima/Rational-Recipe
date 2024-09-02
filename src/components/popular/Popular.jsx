import "./popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import "@splidejs/react-splide/css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Popular() {
  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("popular");
    if (check) {
      setRandomRecipe(JSON.parse(check));
    } else {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
        )
        .then((response) => {
          setRandomRecipe(response.data.recipes);
          localStorage.setItem(
            "popular",
            JSON.stringify(response.data.recipes)
          );
        });
    }
  }, []);

  return (
    <div className="popularDiv">
      <h3>
        Popular <span>...</span>
      </h3>
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          drag: "free",
          gap: "2.5em",
          pagination: false,
        }}
      >
        {randomRecipe.map((recipe) => (
          <SplideSlide key={recipe.id} className="splideCard">
            <div className="imgDiv">
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
