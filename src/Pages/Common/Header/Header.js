import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container fluid className='shadow p-3 mb-5 bg-body rounded'>
            <Navbar>
                <Container>
                    <Navbar.Brand to="/" className='text-primary'><Button variant="primary">Hussy</Button> Portal</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='me-2'>
                            <Button variant="danger">Advertise</Button>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Button variant="outline-dark">hu</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;