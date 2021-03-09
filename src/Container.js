import React, { PureComponent } from 'react'
import Routing from './Routing'
import 'normalize.css';
import './Stylesheet/fontawesome/css/fontawesome.css';
import './Stylesheet/fontawesome/css/brands.css';
import './Stylesheet/fontawesome/css/solid.css';
import './Stylesheet/main.scss'
import {Images} from './Theme'
export default class Container extends PureComponent {
    render() {
        return (
            <div className="container" >
                <div className="content-container" style={{background:`url(${Images.bgMgLight})`,backgroundSize:'260vh 260vh'}}>

                    <Routing/>
                </div>
            </div>
        )
    }
}
