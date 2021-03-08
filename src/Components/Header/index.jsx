import React from 'react'
import {Images} from '../../Theme'
import {MyContext} from '../../Context'




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
                        <li><a href="#">Home</a><span/></li>
                        <li><a href="#">Portofolio</a><span/></li>
                        <li><a href="#">Services</a><span/></li>
                        <li><a href="#">Order</a><span/></li>
                        <li><a href="#">About</a><span/></li>
                    </ul>
                </div>
           </div>
        </header>
    )
}

export default Header