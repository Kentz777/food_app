import React from "react";
import FoodItem from "./FoodItem/FoodItem";

export default function FoodList({foodData, setFoodId}) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
      ))}
    </div>
  );
}
