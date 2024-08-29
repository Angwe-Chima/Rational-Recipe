import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './cuisine.css'


function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params  = useParams()

  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const getCuisine = (name) => {
    axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
    )
    .then((response)=>{
      setCuisine(response.data.results)      
    })
  };
  useEffect(() => {
    getCuisine(params.type)
  }, [params.type]);

  return (
    <div className="resultDiv">
      {cuisine.map((item, idx)=>(
        <div key={idx}>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Cuisine;
