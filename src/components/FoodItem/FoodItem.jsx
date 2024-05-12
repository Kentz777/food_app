import React from "react";
import styles from "../FoodItem/FoodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={food.image} alt="" />
      <div className={styles.content}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <button 
      onClick={() => {
      console.log(food.id)
      setFoodId(food.id);
      }} 
      className={styles.button}>
        View Recipe
      </button>
    </div>
  );
}
