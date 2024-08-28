import { useState, useEffect } from "react";
import axios from "axios";
import "./veggies.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Veggies() {
  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("veggies");
    if (check) {
      setRandomRecipe(JSON.parse(check));      
    } else {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&include-tags=vegetarian`
        )
        .then((response) => {
          setRandomRecipe(response.data.recipes);
          localStorage.setItem("veggies", JSON.stringify(response.data.recipes));
        });
    }
  }, [])

    return (
      <div className="veggiesDiv">
        <Splide
          options={{
            rewind: true,
            perPage: 4,
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

export default Veggies