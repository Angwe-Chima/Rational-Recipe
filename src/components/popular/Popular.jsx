import { useState, useEffect } from "react";
import axios from "axios";
import "./popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
        )
        .then((response) => {
          setRandomRecipe(response.data.recipes);
          localStorage.setItem("popular", JSON.stringify(response.data.recipes));
        });
    }
  }, []);

  return (
    <div className="popularDiv">
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          drag: "free",
          gap: "2em",
          pagination: false,
        }}
      >
        {randomRecipe.map((recipe) => (
          <SplideSlide key={recipe.id} className="splideCard">
            <div>
            {recipe.vegan? <span>Vegan</span>: ""}
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
