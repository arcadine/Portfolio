import './header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header>
        <Navbar expand="md" className="nav d-flex align-items-center">
            <Container className="d-flex" id="navInner">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon aria-label="Home" icon={faHouse} id="home"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-item nav-link" href="/professional"> Professional Work</Nav.Link>
                        <Nav.Link className="nav-item nav-link" href="/personal">Personal Projects</Nav.Link>
                        <Nav.Link className="nav-item nav-link" href="/#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header;