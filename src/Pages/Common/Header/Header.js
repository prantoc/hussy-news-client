import React, { useContext } from 'react';
import { Button, Container, Dropdown, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { FaPlus, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logoutUser, setSearchQuery } = useContext(AuthContext);
    const userLogout = () => {
        logoutUser()
            .then(() => {
                console.log(' Sign-out successful');
            }).catch((error) => {
                console.error(error);
            });
    }
    const handleSearch = e => {
        setSearchQuery(e.target.value)
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
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={handleSearch}
                            />
                        </Form>
                    </Navbar.Collapse>
                    {
                        user
                            ?
                            <Navbar.Text className='d-flex mx-auto'>
                                <Button className='me-2 py-1' variant="danger"><FaPlus /> Advertise</Button>

                                <Dropdown>
                                    <Dropdown.Toggle className='border border-1 py-1' variant="outline-light" id="dropdown-basic">
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
                                        <Dropdown><Link to="/profile" data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabIndex="0">Profile</Link></Dropdown>
                                        <Dropdown.Item onClick={userLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Navbar.Text>

                            :
                            <Nav className='py-1'>
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