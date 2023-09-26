import React, { useState } from "react";
import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
const Cards = (props) => {
  const [click, setclick] = useState(false);
  const [clickedCard, setClickedCard] = useState([]);
  return (
    <div className="cards_container">
      {props.images.map((img, index) => (
        <div key={index} className="cards">
          <div
            className="container"
            onClick={() => {
              setclick(!click);
              setClickedCard(props.images[index]);
            }}
          >
            <h2 className="image_name">{img.name}</h2>
            <motion.img
              className="image"
              src={img.image_url}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              alt="Beer"
            />

            <p className="tagline">{img.tagline}</p>
          </div>
        </div>
      ))}
      {click && (
        <div className="opened_card">
            <div className="cross" onClick={()=>{
                setclick(!click)
            }}>
                <CloseIcon className="close_icon"/>
            </div>
          <p>
            <p>{clickedCard.description || "N/A"}</p>
            <p>First Brewed: {clickedCard.first_brewed || "N/A"}</p>
            <p>ABV (Alcohol By Volume): {clickedCard.abv || "N/A"}%</p>
            <p>
              IBU (International Bitterness Units): {clickedCard.ibu || "N/A"}
            </p>
            <p>Target FG (Final Gravity): {clickedCard.target_fg || "N/A"}</p>
            <p>Target OG (Original Gravity): {clickedCard.target_og}</p>
            <p>EBC (European Brewery Convention): {clickedCard.ebc}</p>
            <p>SRM (Standard Reference Method): {clickedCard.srm || "N/A"}</p>
            <p>pH: {clickedCard.ph || "N/A"}</p>
            <p>Attenuation Level: {clickedCard.attenuation_level || "N/A"}%</p>
            <p>
              <span className="smallHeadings">Volume:</span>{" "}
              {clickedCard.volume.value || "N/A"}{" "}
              {clickedCard.volume.unit || "N/A"}
            </p>
            <p>
              <span className="smallHeadings">Boil Volume:</span>{" "}
              {clickedCard.boil_volume.value || "N/A"}{" "}
              {clickedCard.boil_volume.unit || "N/A"}
            </p>
            <ul>
              <li className="smallHeadings">Method:</li>
              <ul>
                <li className="smallSubHeadings">Mash Temp:</li>
                <ul>
                  {clickedCard.method.mash_temp.map((temp, index) => (
                    <li key={index}>
                      Temperature: {temp.temp.value || "N/A"}{" "}
                      {temp.temp.unit || "N/A"}, Duration:{" "}
                      {temp.duration || "N/A"} minutes
                    </li>
                  ))}
                </ul>
                <li className="smallSubHeadings">Fermentation:</li>
                <ul>
                  <li>
                    Temperature:{" "}
                    {clickedCard.method.fermentation.temp.value || "N/A"}{" "}
                    {clickedCard.method.fermentation.temp.unit || "N/A"}
                  </li>
                </ul>
                <li>Twist:</li>
                <ul>
                  <li>{clickedCard.method.twist || "N/A"}</li>
                </ul>
              </ul>
            </ul>

            <p>
              {" "}
              <span className="smallHeadings">Brewer's Tips: </span>
              <span> {clickedCard.brewers_tips || "N/A"}</span>
            </p>
            <p>
              <span className="smallHeadings">Contributed by: </span>
              <span> {clickedCard.contributed_by || "N/A"}</span>
            </p>
            <ul>
              <li className="smallHeadings">Ingredients:</li>

              <p>
                <span className="smallSubHeadings">Malt: </span>

                {clickedCard.ingredients.malt.map((ingredient, index) => (
                  <span key={index}>{ingredient.name || "N/A"}, </span>
                ))}
              </p>
              <p>
                <span className="smallSubHeadings">Hops:</span>

                {clickedCard.ingredients.hops.map((ingredient, index) => (
                  <span key={index}>{ingredient.name || "N/A"}, </span>
                ))}
              </p>
              <p>
                <span className="smallSubHeadings">Yeast:</span>

                <span>{clickedCard.ingredients.yeast || "N/A"}</span>
              </p>

              <li className="smallHeadings">Food Pairing:</li>
              <ul>
                {clickedCard.food_pairing.map((pair, pairIndex) => (
                  <li key={pairIndex}>{pair || "N/A"}</li>
                ))}
              </ul>
            </ul>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cards;
