import './personal.css';
import Container from 'react-bootstrap/Container';
import BS5svg from '../../assets/stack logos/bootstrap5.svg?react';
import CSS3svg from '../../assets/stack logos/css3.svg?react';
import EJSsvg from '../../assets/stack logos/expressjs.svg?react';
import HTML5svg from '../../assets/stack logos/html5.svg?react';
import JSsvg from '../../assets/stack logos/js.svg?react';
import MDBsvg from '../../assets/stack logos/mongodb.svg?react';
import MSQLsvg from '../../assets/stack logos/mysql.svg?react';
import NJSsvg from '../../assets/stack logos/nodejs.svg?react';
import Reactsvg from '../../assets/stack logos/react.svg?react';
import SASSsvg from '../../assets/stack logos/sass.svg?react';
import TSsvg from '../../assets/stack logos/ts.svg?react';
import booki from '../../assets/oc project logos/booki logo.png';
import gomike from '../../assets/oc project logos/gomikedesigns logo.png';
import groupo from '../../assets/oc project logos/groupomania logo.png';
import hottakes from '../../assets/oc project logos/hot takes logo.png';
import kanap from '../../assets/oc project logos/kanap logo.png';
import food from '../../assets/oc project logos/ohmyfood logo.png';

const Personal = () => {
  return (
    <div className="d-flex flex-column">
        {/* hero section */}
        <Container fluid className="hero-sec d-flex flex-column justify-content-center align-items-center" id="perHero">
            <div className="hero-txt-sec d-flex flex-column align-items-center">
                <h1>Personal Projects</h1>
            </div>
        </Container>

        {/* personal projects intro section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec top-sec" id="perSec">
            <div>
                <h2>Background</h2>
            </div>

            <div className="d-flex page-sec-inner align-items-center">
                <p style={{textAlign: "center"}}>
                    These projects were completed as part of my coursework for the Web Developer path on <a href="https://openclassrooms.com/en/" target="_blank">OpenClassrooms</a>. Each project's repository contains a README listing the project's objectives, a link to the full project brief, and a link to a video recording where I present each project to an evaluator as if I was pitching it to the client.
                </p>
            </div>
        </Container>

        {/* project cards section */}
        <Container fluid className="d-flex justify-content-center align-items-center page-sec" id="perPgSec">
            <div className="d-flex justify-content-center align-items-center card-sec">
                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-top">
                        <img src={booki} alt="Booki logo" className="card-pic"/>
                        <h3>Turning a Mockup Into a Webpage</h3>
                        <p className="card-txt">
                            I was tasked with turning Figma mockups into a simple, fully responsive prototype of the client's website.
                        </p>
                        <a href="https://github.com/arcadine/Project-2" target="_blank" className="card-btn">Github Repository</a>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center card-bottom">
                        <h4>Project Stack:</h4>
                        <div className="d-flex justify-content-center align-items-center icon-sec">
                            <HTML5svg className="stack-icon" title="HTML 5" />
                            <CSS3svg className="stack-icon" />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-top">
                        <img src={food} alt="OhMyFood logo" className="card-pic"/>
                        <h3>Adding Animations to a Mobile Site</h3>
                        <p className="card-txt">
                            I built the client's restaurant site from Figma mockups, using a mobile-first approach and CSS animations.
                        </p>
                        <a href="https://github.com/arcadine/Project-3" target="_blank" className="card-btn">Github Repository</a>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center card-bottom">
                        <h4>Project Stack:</h4>
                        <div className="d-flex justify-content-center align-items-center icon-sec">
                            <HTML5svg className="stack-icon" />
                            <CSS3svg className="stack-icon" />
                            <SASSsvg className="stack-icon" />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-top">
                        <img src={gomike} alt="GoMikeDesigns logo" className="card-pic"/>
                        <h3>Optimizing an Existing Site</h3>
                        <p className="card-txt">
                            I optimized the client's website for speed, accessibility, and performance while implementing SEO best practices.
                        </p>
                        <a href="https://github.com/arcadine/Project-4" target="_blank" className="card-btn">Github Repository</a>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center card-bottom">
                        <h4>Project Stack:</h4>
                        <div className="d-flex justify-content-center align-items-center icon-sec">
                            <HTML5svg className="stack-icon" />
                            <CSS3svg className="stack-icon" />
                            <JSsvg className="stack-icon" />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-top">
                        <img src={kanap} alt="Kanap logo" className="card-pic"/>
                        <h3>E-Commerce Front End Scripting</h3>
                        <p className="card-txt">
                            I developed a vanilla JavaScript front end for the clients e-commerce site, supporting site events and web services.
                        </p>
                        <a href="https://github.com/arcadine/Project-5" target="_blank" className="card-btn">Github Repository</a>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center card-bottom">
                        <h4>Project Stack:</h4>
                        <div className="d-flex justify-content-center align-items-center icon-sec">
                            <HTML5svg className="stack-icon" />
                            <CSS3svg className="stack-icon" />
                            <JSsvg className="stack-icon" />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-top">
                        <img src={hottakes} alt="Hot Takes logo" className="card-pic"/>
                        <h3>Building a Secure Database and API</h3>
                        <p className="card-txt">
                            I built a back-end API for the client's web application, enabling secure interaction with the site's database.
                        </p>
                        <a href="https://github.com/arcadine/Project-6" target="_blank" className="card-btn">Github Repository</a>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center card-bottom">
                        <h4>Project Stack:</h4>
                        <div className="d-flex justify-content-center align-items-center icon-sec">
                            <HTML5svg className="stack-icon" />
                            <SASSsvg className="stack-icon" />
                            <JSsvg className="stack-icon" />
                            <TSsvg className="stack-icon" />
                            <MDBsvg className="stack-icon" />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column card">
                    <div className="d-flex flex-column justify-content-center align-items-center card-top">
                        <img src={groupo} alt="Groupomania logo" className="card-pic"/>
                        <h3>Building a Full-Stack Social Media Solution</h3>
                        <p className="card-txt">
                            I created a full-stack solution for a simple, secure social media platform tailored to the client's needs.
                        </p>
                        <a href="https://github.com/arcadine/Project-7" target="_blank" className="card-btn">Github Repository</a>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center card-bottom">
                        <h4>Project Stack:</h4>
                        <div className="d-flex justify-content-center align-items-center icon-sec">
                            <Reactsvg className="stack-icon" />
                            <BS5svg className="stack-icon" />
                            <MSQLsvg className="stack-icon" />
                            <NJSsvg className="stack-icon" />
                            <EJSsvg className="stack-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    
  )
}

export default Personal