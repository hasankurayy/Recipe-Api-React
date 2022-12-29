import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function MealDetail() {

    const { idMeal } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal)
            .then(res => { setData(res.data.meals[0]); console.log(res.data.meals[0]) })
    }, [idMeal])

    if(data.strYoutube){
        var strUrl = data.strYoutube.split("=")
        var videoId = strUrl[strUrl.length-1]
    }

    return (
        <>
            {data && (
                <>
                    <div className="meal-details">
                        <img src={data.strMealThumb} alt="" />
                        <div className="meal-details-inner">
                            <h1>{data.strMeal}</h1>
                            <h2>{data.strArea}</h2>
                            <h3>Category {data.strCategory}</h3>
                        </div>
                    </div>
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2> <br />
                            <h4>{data.strIngredient1}: {data.strMeasure1}</h4>
                            <h4>{data.strIngredient2}: {data.strMeasure2}</h4>
                            <h4>{data.strIngredient3}: {data.strMeasure3}</h4>
                            <h4>{data.strIngredient4}: {data.strMeasure4}</h4>
                            <h4>{data.strIngredient5}: {data.strMeasure5}</h4>
                            <h4>{data.strIngredient6}: {data.strMeasure6}</h4>
                            <h4>{data.strIngredient7}: {data.strMeasure7}</h4>
                            <h4>{data.strIngredient8}: {data.strMeasure8}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2> <br />
                            <h4>{data.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">
                        <iframe src={`https://www.youtube.com/embed/${videoId}`} title="video" />
                    </div>
                </>
            )}
        </>
    )
}

export default MealDetail