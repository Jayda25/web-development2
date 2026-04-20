import "./App.css";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from "react-bootstrap";

function MyNav() {
    return (
        <Navbar bg="light" expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/Home">Recipe Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/MyForm">Form</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;