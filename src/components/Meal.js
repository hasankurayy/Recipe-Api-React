import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Letters from './Letters'
import MealItem from './MealItem'

function Meal({url, setUrl}) {

    
    const [items, setItems] =useState([])
    const [search, setSearch] = useState()

    useEffect(() => {
        axios(url)
            .then(res => setItems(res.data.meals))
            .catch(err => console.log(err))
    }, [url])

    const searchMeal = (e) => {
        if(e.key === "Enter"){
            setUrl("https://www.themealdb.com/api/json/v1/1/search.php?s="+search)
            setSearch("")
        }
    }

    return (
        <div className='main'>
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, distinctio. Quod eaque ad enim ducimus fugiat eos excepturi ipsum possimus.</h4>
            </div>
            <div className="searchBox">
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={searchMeal}/>
            </div>
            <div className="container">
                {items ? items.map((item,key) => (
                    <MealItem key={key} item={item} />
                ))
                : (
                    <div style={{fontSize: "60px", fontWeight: "bold"}}>
                        Not Found Meal
                    </div>
                )}
            </div>
            <div className="letters-container">
                <Letters setUrl={setUrl} />
            </div>
        </div>
    )
}

export default Meal