import './content.css';
import Container from 'react-bootstrap/Container';
import headshot from "../../assets/Diego Jorge headshot circle.png";
import logos from "../../assets/triple logos all black.png";

export const Content = () => {
  return (
    <div className="d-flex flex-column">

        {/* hero section */}
        <Container fluid className="hero-sec d-flex flex-column justify-content-center align-items-center">
            <div className="hero-txt-sec d-flex flex-column align-items-center">
                <h1>Hi! I'm Diego Jorge.</h1>
                <p className="hero-p"> I'm a front-end developer in Philadelphia specializing in responsive and accessible web interfaces.</p>
            </div>
        </Container>

        {/* about me section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
          <div className="d-flex flex-row page-sec-inner align-items-center">
            
            <div className="img-sec">
              <img src={headshot} alt="Diego Jorge headshot" id="headshot"/>
            </div>

            <div className="text-sec">
              <h2>
                About Me
              </h2>
              <p>
                I'm passionate about bridging the gap between design and development by translating UI/UX concepts and ideas into front-end implementations using a variety of tools and frameworks, such as WordPress and React. Y también hablo español!
              </p>
              <p>
                Check out some of my work below. 
              </p>
              <div className="d-flex flex-row align-items-center" id="btnSec">
                <a className="btn" href="#professional">Professional Work</a>
                <a className="btn" href="">Personal Projects</a>
              </div>
            </div>

          </div>
        </Container>

        {/* professional work section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
          <div id="professional">
            <h2>Professional Work</h2>
          </div>

          <div className="d-flex flex-row page-sec-inner align-items-center">
            
            <div className="text-sec">
              <p>
                I've spent 5 years as the sole front end web developer for Haverford Systems Inc. where I've primarily worked on maintaining and updating our biggest brand website, <a href="https://ptzoptics.com" target="_blank">PTZOptics</a>, as well as the sites for our other brands, <a href="https://haverford.com" target="_blank">Haverford Systems Integration</a> and <a href="https://huddlecamhd.com" target="_blank">HuddleCamHD</a>. In my time at Haverford, I've collaborated with colleagues across multiple disciplines to guide the sites through a multitude of changes aimed at streamlining the user experience, improving mobile responsiveness, and enhancing accessibility. Allow me to guide you through some of the creative considerations I take when designing or reworking a web page…
              </p>
            </div>

            <div className="img-sec">
              <img src={logos} alt="PTZOptics, HuddleCamHD, and Haverford Systems logos in all black stacked vertically" id="logos"/>
            </div>

          </div>
        </Container>

    </div>
  )
}

export default Content;