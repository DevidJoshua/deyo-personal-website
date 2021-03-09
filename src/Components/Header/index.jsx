import React from 'react'
import {Images} from '../../Theme'
import {MyContext} from '../../Context'
import {Link} from 'react-router-dom'



const Header = (props) =>{
    const {isDay,setIsDay} = React.useContext(MyContext)
    return(
        <header>
           <div className="header-wrapper">
                <a href="#"><img src={isDay ? Images.logo : Images.logoLight} className="logo-nav"></img></a>
                <input  type="checkbox" className="toogle-hamburger"/>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`nav-menu ${isDay ? '' : 'nav-menu-night'}`}>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link><span/></li>
                        <li>
                            <Link to="#">Portofolio</Link><span/></li>
                        <li>
                            <Link to="#">Services</Link><span/></li>
                        <li>
                            <Link to="#">Order</Link><span/></li>
                        <li>
                            <Link to="#">About</Link><span/></li>
                    </ul>
                </div>
           </div>
        </header>
    )
}

export default Header