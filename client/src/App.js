import React from 'react'
import {useRoutes} from 'hookrouter'
import './App.css'
import NavigationBar from './components/nav-bar/navbar'
import NoPageFound from './components/no-page-found/nopagefound'
import routes from './router'

const App = () => {
  const routeResult = useRoutes(routes)
  return (
    <div className="App">
      <NavigationBar />
      { routeResult || <NoPageFound /> }
    </div>
  )
}

export default App