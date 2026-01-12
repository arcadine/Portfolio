import './header.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {
  return (
    <div>
        <Navbar sticky="top" className="nav d-flex justify-content-start align-items-center">
            <Container className="d-flex" id="navInner">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faHouse} id="home"/>
                </Navbar.Brand>
                <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#professional">Professional Work</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#personal">Personal Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>             
                    </ul>
                </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;