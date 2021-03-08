import React from 'react'
import {MyContext} from '../Context'
import {Colors} from '../Theme'
import { BsMoon } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';


export default function ToogleNightDay() {
    const {isDay,setIsDay} = React.useContext(MyContext)
    return (
        <div className="toogleDayNight">
           <div className="icon-toogler">
                <input type="checkbox" onChange={e=>setIsDay(e.target.checked)}/>
                {(isDay
                    ? <BsMoon className="toogle-nightday-icon moon"/>
                    :<IoMdSunny  className="toogle-nightday-icon sun"/>
                )}
           </div>
          {/* <div className={`circle ${isDay? '' : 'night'}`}/> */}
        </div>
    )
}
