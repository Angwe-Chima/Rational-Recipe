import "./recipe.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Recipe() {
  let params = useParams();
  const [detail, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");

  const fetchDetails = () => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

    axios
      .get(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
      )
      .then((response) => {
        setDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="detailsDiv">
      <div className="left">
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
      </div>
      <div className="right">
        <div className="buttonDiv">
          <button
            onClick={() => setActiveTab("instruction")}
            className={activeTab === "instruction" ? "active" : ""}
          >
            Instruction
          </button>
          <button
            onClick={() => setActiveTab("ingredient")}
            className={activeTab === "ingredient" ? "active" : ""}
          >
            Ingredient
          </button>
        </div>

        <div className="summary">
          {activeTab === "instruction" && (
            <div>
              <div className="sum">
                <h3>Summary</h3>
                <p dangerouslySetInnerHTML={{ __html: detail?.summary }}></p>
              </div>

              <div className="inst">
                <h3>Instructions</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: detail?.instructions }}
                ></p>
              </div>
            </div>
          )}

          {activeTab === "ingredient" && (
            <ul className="ingredient">
              {detail?.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
