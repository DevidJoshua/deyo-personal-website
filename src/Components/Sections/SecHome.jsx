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
            <div className="profile ">
                <div className="greetings ">
                        <h1>Hii, I'm Devid Yosua</h1>
                        <span>Software Developer</span>
                        <span>Graphic Design Enthuasiast</span>
                        <br/>
                        <br/>
                        <br/>
                        <span>Video Editing Enthuasiast</span>
                        <span>Motion Graphic Enthuasiast</span>
                        <br/>
                        <div className="social-media">
                            <a href=""><i class="fab btn rounded fa-facebook-f"/></a>
                            <a href=""><i class="fab btn rounded fa-twitter"/></a>
                            <a href=""><i class="fab btn rounded fa-instagram"/></a>
                            <a href=""><i class="fab btn rounded fa-github"/></a>
                        </div>

                </div>
                <div className="profile-pic">
                        <center><img src={Images.mePhoto} alt="my profile pic"/></center>
                </div>
            </div>
            <br/>
            <div className="home-footer">
                <div className="tools-language">
                    <p>Tools and frameworks used in my projects</p>
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