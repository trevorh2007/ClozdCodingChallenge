import React, { useState } from 'react'
import {useRoutes} from 'hookrouter'
import NavigationBar from './components/nav-bar/navbar'
import NoPageFound from './components/no-page-found/nopagefound'
import routes from './router'

const App = () => {
  const [userData, setUserData] = useState()
  const routeResult = useRoutes(routes)
  return (
    <div className="App">
      <NavigationBar />
      { routeResult(userData, setUserData) || <NoPageFound /> }
    </div>
  )
}

export default App