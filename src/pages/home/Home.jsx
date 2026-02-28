import './home.css';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import headshot from "../../assets/Diego Jorge headshot circle.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div className="d-flex flex-column">
        {/* hero section */}
        <Container fluid className="hero-sec d-flex flex-column justify-content-center align-items-center" id="homeHero">
            <div className="hero-txt-sec d-flex flex-column align-items-center">
                <h1>Hi! I'm Diego Jorge.</h1>
                <p className="hero-p"> I'm a front-end developer in Philadelphia specializing in responsive and accessible web interfaces.</p>
            </div>
        </Container>

        {/* about me section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
          <div className="d-flex page-sec-inner align-items-center">
            
            <div className="img-sec">
              <img src={headshot} alt="Diego Jorge headshot" id="headshot"/>
            </div>

            <div className="d-flex text-sec" id="bio">
              <h2 id="abtMe">
                About Me
              </h2>
              <p>
                I'm passionate about bridging the gap between design and development by translating UI/UX concepts and ideas into front-end solutions using a variety of tools and frameworks, such as WordPress and React. Y también hablo español! Check out some of my work below.
              </p>
              <div className="d-flex align-items-center btn-sec">
                <NavLink className="btn" to="/professional">Professional Work</NavLink>
                <NavLink className="btn" to="/personal">Personal Projects</NavLink>
              </div>
            </div>

          </div>
        </Container>

        {/* contact section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
            <div className="d-flex flex-column align-items-center" id="contactCard">
                <h2 id="contact">Contact Me</h2>
                <div className="d-flex btn-sec">
                    <a className="btn d-flex flex-row align-items-center" href="https://github.com/arcadine" target="_blank"><FontAwesomeIcon aria-hidden="true" icon={faGithub} className="cont-icon"/> Github</a>

                    <a className="btn d-flex flex-row align-items-center" href="https://www.linkedin.com/in/diegojorge97/" target="_blank"><FontAwesomeIcon aria-hidden="true" icon={faLinkedin} className="cont-icon"/> LinkedIn</a>

                    <a className="btn d-flex flex-row align-items-center" href="mailto:diegoarcadine@gmail.com"><FontAwesomeIcon aria-hidden="true" icon={faEnvelope} className="cont-icon"/> Email</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Home