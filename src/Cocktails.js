import React, { useState } from "react";
import axios from "axios";
import "./Cocktails.css";
import Recipe from "./Recipe";

export default function Cocktails() {
  const [drinks, setDrinks] = useState(null);
  const [data, setData] = useState(false);
  const [recipe, setRecipe] = useState(null);

  if (data === true) {
    return (
      <div className="cocktails">
        <Recipe cocktail={recipe} />
        <div className="row">
          {drinks.map(function (drink, index) {
            function Recipe() {
              setRecipe(drink.strDrink);
            }
            return (
              <div key={index} className="col-3">
                <form>
                  <button type="button" on-click={Recipe()}>
                    <img
                      src={drink.strDrinkThumb}
                      className="img-fluid cocktail-img"
                      alt=""
                    />
                  </button>
                  <header className="cocktail-name-box">
                    <h3 className="cocktail-name">{drink.strDrink}</h3>
                  </header>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    function cocktails(response) {
      setDrinks(response.data.drinks);
      setData(true);
    }
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;
    axios.get(url).then(cocktails);
    return <div>Loading...</div>;
  }
}
