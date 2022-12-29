import React, { useState } from "react";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealDetail from "./pages/MealDetail";
import Meal from "./components/Meal";

function App() {

    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")

    return (
        <>


            <BrowserRouter>

                <Menu setUrl={setUrl} />

                <Routes>
                    <Route path="/" element={<Meal url={url} setUrl={setUrl} />} />
                    <Route path="/:idMeal" element={<MealDetail />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
