import './footer.css';
import Container from 'react-bootstrap/Container';

export const Footer = () => {
  return (
    <div>
      <Container fluid className="d-flex flex-column justify-content-center align-items-center" id="footer">
        <p className="footer-txt">
          © Diego Jorge 2025
        </p>
        <p className="footer-txt">
          This site was prototyped in Elementor and created with React.
        </p>
      </Container>
    </div>
  )
}

export default Footer;