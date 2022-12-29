import React from 'react'
import Meal from '../components/Meal'
import Menu from '../components/Menu'


function Home({url, setUrl}) {
  return (
    <>
        <Menu setUrl={setUrl} />
        <Meal url={url} setUrl={setUrl} />
    </>
  )
}

export default Home