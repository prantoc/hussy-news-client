import React, { useContext } from 'react';
import { Button, Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import { FaPlus, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const userLogout = () => {
        logoutUser()
            .then(() => {
                console.log(' Sign-out successful');
            }).catch((error) => {
                console.error(error);
            });
    }
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

                        </Nav>
                    </Navbar.Collapse>
                    {
                        user
                            ?
                            <Navbar.Text className='d-flex mx-auto'>
                                <Button className='me-2' variant="danger"><FaPlus /> Advertise</Button>

                                <Dropdown>
                                    <Dropdown.Toggle className='border border-1' variant="outline-light" id="dropdown-basic">
                                        {
                                            user
                                                ?
                                                <Image roundedCircle style={{ height: '28px' }} src={user?.photoURL} />
                                                :
                                                <FaUser />
                                        }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='position-absolute end-100 translate-middle-x'>
                                        <Dropdown.Item >{user?.displayName}</Dropdown.Item>
                                        <Dropdown.Item onClick={userLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Navbar.Text>

                            :
                            <Nav>
                                <LinkContainer to="/login" >
                                    <Link className="nav-link">Login</Link>
                                </LinkContainer>
                                <LinkContainer to="/signup" >
                                    <Link className="nav-link">SignUp</Link>
                                </LinkContainer>

                            </Nav>
                    }


                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;