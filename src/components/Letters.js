import React from 'react'

function Letters({setUrl}) {

    const lettersArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"]

    return (
        <>
            {lettersArr.map((letter, key) => (
                <div className='num-box' key={key}>
                    <h3 onClick={() => setUrl("https://www.themealdb.com/api/json/v1/1/search.php?f="+letter)}>{letter}</h3>
                </div>
            ))}
        </>
    )
}

export default Letters