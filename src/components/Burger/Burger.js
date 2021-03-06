import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) //[salad, becon ...]
    .map(igKey => { //igKey = salad
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key = {igKey + i}  type = {igKey} />
      }) 
      // return1 = [...Array(obj[key] = value "1n")] = [empty strS] = [ , , ...]
      // return2 = возвращает на каждый индекс отдельный BurgerIngredient type = название ингредиента
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>
    }
  return (
    <div className = {classes.Burger}>
      <BurgerIngredient type = "bread-top" />
      {transformedIngredients}
      <BurgerIngredient type = "bread-bottom" />
    </div>
  )
}

export default burger;


