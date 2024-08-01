import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from '../assets/react.svg';
import { Link } from "react-router-dom";

const NavBarComponent = ({ onSearch }) => {
    const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = event.target.elements.search.value;
        onSearch(searchTerm);
    };
    const handleLogout = () => {
        console.log("Logged out");
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container className="justify-content-center">
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Company logo"
                    />
                    {' '}Mels' Solutions
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/logout" className="nav-link" onClick={handleLogout}>Logout</Link>
                    </Nav>
                    <Form inline="true" onSubmit={handleSearch} className="ml-auto d-flex">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 form-control me-2"
                            name="search"
                        />
                        <Button className="btn btn-outline-success" variant="outline-info" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarComponent;
