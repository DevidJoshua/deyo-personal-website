import React, { PureComponent } from 'react'
import Routing from './Routing'
import 'normalize.css';
import './Stylesheet/main.scss'
export default class Container extends PureComponent {
    render() {
        return (
            <div className="container">
                <div className="content-container">
                    <Routing/>
                </div>
            </div>
        )
    }
}
