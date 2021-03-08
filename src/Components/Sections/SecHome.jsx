import React from 'react'
import {Images,Colors} from '../../Theme'
import {MyContext} from '../../Context'
import { RiFacebookFill,RiTwitterFill,RiInstagramFill,RiGithubFill } from 'react-icons/ri';
import Draggable from 'react-draggable';

const SecHome = () => {
    const {isDay,setIsDay} = React.useContext(MyContext)
    const tools=[
        {name:'React',caption:'',link:'',imgData:Images.rt},
        {name:'Nodejs',caption:'',link:'',imgData:Images.ns},
        {name:'Graphql',caption:'',link:'',imgData:Images.gl},
        {name:'HTML CSS Javascript',caption:'',link:'',imgData:Images.hs},
        {name:'Sass',caption:'',link:'',imgData:Images.ss},
        {name:'Php Mysql',caption:'',link:'',imgData:Images.pl},
        {name:'Github',caption:'',link:'',imgData:Images.git},
        {name:'After Effect',caption:'',link:'',imgData:Images.ae},
        {name:'Premiere Pro',caption:'',link:'',imgData:Images.pr},
        {name:'Photoshop',caption:'',link:'',imgData:Images.ps},
    ]
    return (
        <section className="section-home">
            <div className="profile">
                <div className="greetings">
                        <div className="greet-box">
                            <p>Hii, Visitors</p>
                            <img src={require('../Svg/chat-box.svg').default}/>
                        </div>
                        <h1>I'm Devid Yosua</h1>
                        <span>Software Developer</span>
                        <span>Graphic Design Enthuasiast</span>
                        <span>Video Editing Enthuasiast</span>
                        <span>Motion Graphic Enthuasiast</span>
                        <div className="social-media">
                            <a href=""><RiFacebookFill/></a>
                            <a href=""><RiTwitterFill/></a>
                            <a href=""><RiInstagramFill/></a>
                            <a href=""><RiGithubFill/></a>
                        </div>

                </div>
                <div className="profile-pic">
                        <center><img src={Images.mePhoto} alt="my profile pic"/></center>
                </div>
            </div>
            <div className="home-footer">
                <img src={require('../Svg/dots.svg').default} alt=""/>
                <div className="tools-language">
                    <p>Tools and frameworks which used in my projects</p>
                    <div className="tools-slider">
                            <ul className="items-skills">
                               {tools.map((row,index)=>(
                                    <li key={index}>
                                        <img src={row.imgData} alt=""/>
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecHome