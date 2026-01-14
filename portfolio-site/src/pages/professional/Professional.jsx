import './professional.css';
import Container from 'react-bootstrap/Container';
import logos from "../../assets/triple logos all black.png";

const Professional = () => {
  return (
    <div className="d-flex flex-column">
        {/* professional work section */}
        <Container fluid className="d-flex flex-column align-items-center page-sec">
          <div id="professional">
            <h2>Professional Work</h2>
          </div>

          <div className="d-flex flex-row page-sec-inner align-items-center">
            
            <div className="text-sec">
              <p>
                I spent over 5 years as the sole front end web developer for Haverford Systems Inc. where I primarily worked on maintaining and updating their biggest brand website, <a href="https://ptzoptics.com" target="_blank">PTZOptics</a>, as well as the sites for their other brands, <a href="https://haverford.com" target="_blank">Haverford Systems Integration</a> and <a href="https://huddlecamhd.com" target="_blank">HuddleCamHD</a>. In my time at Haverford, I collaborated with colleagues across multiple disciplines to guide the sites through a multitude of changes aimed at streamlining the user experience, improving mobile responsiveness, and enhancing accessibility. Allow me to guide you through some of the creative considerations I take when designing or reworking a web page…
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

export default Professional