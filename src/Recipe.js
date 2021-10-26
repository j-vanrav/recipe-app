import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    calories = calories-(calories%1)
    return(
        <div className={style.recipe}>
            <div className={style.recipe_inner}>
                <div className={style.recipe_front}>
                    <h1>{title}</h1>
                    <img className={style.image} src={image} alt=""/>
                </div>
                <div className={style.recipe_back}>
                    <ol>
                        {ingredients.map(ingredient=>(
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    <p>Calories: {calories}</p>
                </div>
            </div>
        </div>

    );
}

export default Recipe;