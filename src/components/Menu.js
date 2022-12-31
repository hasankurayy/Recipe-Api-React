import { useState } from "react"
import { useNavigate } from "react-router-dom"

const categories = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan",
    "Vegetarian", "Breakfast", "Goat"]
    
const countries = ["American","British","Canadian","Chinese","Croatian","Dutch","Egyptian","French","Greek","Indian",
"Irish","Italian","Jamaican","Japanese","Kenyan","Malaysian","Mexican","Moroccan","Polish","Portuguese","Russian","Spanish",
"Thai","Tunisian","Turkish","Unknown","Vietnamese"]

function Menu({setUrl}) {

    const [showCategoriesNav, setShowCategoriesNav] = useState(false)
    const [showCountriesNav, setShowCountriesNav] = useState(false)

    let navigate = useNavigate()

    return (
        <header>
            <div className="logo-mine">
                <a href="/">HKRY</a>
            </div>

            <button className='nav-btn'>
                <p onClick={() => {setShowCategoriesNav(!showCategoriesNav); setShowCountriesNav(false)}} className="btn-categories" >
                    Categories
                </p>
                <p onClick={() => {setShowCountriesNav(!showCountriesNav); setShowCategoriesNav(false)}} className="btn-countries">
                    Countries
                </p>
            </button>

            {showCategoriesNav && (
                <nav className='nav-categories'>
                    <h1>Categories</h1>
                    <hr />
                    {categories.map(category => (
                        <h3 onClick={() => {setUrl("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category); navigate("/"); setShowCategoriesNav(false)}}>{category}</h3>
                    ))}
                </nav>
            )}

            {showCountriesNav && (
                <nav className="nav-countries">
                    <h1>Countries</h1>
                    <hr />
                    {countries.map(country => (
                        <h4 onClick={() => {setUrl("https://www.themealdb.com/api/json/v1/1/filter.php?a="+country); navigate("/"); setShowCountriesNav(false)}}>{country}</h4>
                    ))}
                </nav>
            )}

        </header>
    )
}

export default Menu