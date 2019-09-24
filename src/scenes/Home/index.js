import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import router from '../../constants/router'

class Home extends React.Component{
  render(){
    return(
      <div className="center">
        <h1>CARO</h1>
        <Link to={router.PLAYSCREEN.INDEX} className="home-button">Start</Link>
        <Link to={router.DASHBOARD.INDEX} className="home-button">Dashboard</Link>
      </div>
    )
  }
}

export default Home