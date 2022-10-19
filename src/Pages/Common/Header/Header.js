import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <Container fluid className='shadow p-2 mb-5 bg-body rounded'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='text-primary'><Link to="/" className='nav-link'>Hussy Portal</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <LinkContainer to="/" className='d-lg-none d-block'>
                                <Link className="nav-link">Home</Link>
                            </LinkContainer>
                            <div to="/" className='d-lg-none d-block'>
                                <LeftSideNav></LeftSideNav>
                            </div>
                            <Navbar.Text>
                                <Button className='me-2' variant="danger">Advertise</Button>
                                <Button variant="outline-dark">hu</Button>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;