import './header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header>
        <Navbar expand="md" className="nav d-flex align-items-center">
            <Container className="d-flex" id="navInner">

                <Navbar.Brand as={NavLink} to="/" aria-label="Home">
                    <FontAwesomeIcon icon={faHouse} id="home"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/professional" className="nav-item nav-link"> Professional Work</Nav.Link>
                        <Nav.Link as={NavLink} to="/personal" className="nav-item nav-link">Personal Projects</Nav.Link>
                        <Nav.Link as={NavLink} to={{ pathname: "/", hash: "#contact", }} className="nav-item nav-link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </header>
  )
}

export default Header;