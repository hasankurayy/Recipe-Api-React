import React from 'react'
import { useNavigate } from 'react-router-dom'

function MealItem({item}) {

  let navigate = useNavigate()

  return (
    <div className='card' onClick={() => navigate(item.idMeal)}>
        <img src={item.strMealThumb} alt="" />
        <h3>{item.strMeal}</h3>
    </div>
  )
}

export default MealItem