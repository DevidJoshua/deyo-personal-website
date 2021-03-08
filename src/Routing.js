import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './Components/Header/index'
import ToogleNight from './Components/ToogleNightDay'

import Home from './Pages/PageHome'
import Order from './Pages/PageOrder'
import Portofolio from './Pages/PagePortofolio'
import Services from './Pages/PageServices'
import About from './Pages/PageAbout'

export default function Routing() {
    const pages=[
        {path:['/','home'],group:true,comp:<Home/>},
        {path:'/order',comp:<Order/>},
        {path:'/portofolio',comp:<Portofolio/>},
        {path:'/services',comp:<Services/>},
        {path:'/about',comp:<About/>},
    ]
    return (
        <Router>
            <Header/>
            <ToogleNight/>
            {/* Routes */}

            {pages.map((row,index)=>{
                if(row.group) return(<Switch key={index}>{(row.path).map((r,i)=><Route exact key={i} to={r.path}>{row.comp}</Route>)}</Switch>)
                else return(<Route key={index} exact to={row.path}>{row.comp}</Route>)
            })}
            {/* Routes */}
        </Router>
    )
}
