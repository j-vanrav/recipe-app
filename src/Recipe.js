import React from 'react';
import style from './recipe.module.css';

const Recipe = ({id, title, calories, image, ingredients}) => {
    calories = calories - (calories%1);
    return(
        <div className={style.recipeHolder}>
            <input id="collapsible" className={style.toggle} type="checkbox"/>
            <label for="collapsible" className={style.recipe}>
                <h1>{title}</h1>
                <p>Calories: {calories}</p>
                <img className={style.image} src={image} alt=""/>
            </label>
            <div className={style.ingredients}>
            <ul>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            </div>
        </div>
        


    );
}

export default Recipe;