import './home.css';
import Container from 'react-bootstrap/Container';
import headshot from "../../assets/Diego Jorge headshot circle.png";

const Home = () => {
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

            <div className="d-flex text-sec">
              <h2>
                About Me
              </h2>
              <p>
                I'm passionate about bridging the gap between design and development by translating UI/UX concepts and ideas into front-end implementations using a variety of tools and frameworks, such as WordPress and React. Y también hablo español! <br/> Check out some of my work below.
              </p>
              <div className="d-flex align-items-center" id="btnSec">
                <a className="btn" href="/professional">Professional Work</a>
                <a className="btn" href="/personal">Personal Projects</a>
              </div>
            </div>

          </div>
        </Container>

        {/* contact section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
            <div>
                <h2 id="contact">Contact</h2>
            </div>
        </Container>
    </div>
  )
}

export default Home