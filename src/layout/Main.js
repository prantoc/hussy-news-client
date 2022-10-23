import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../Pages/Common/Footer/Footer';
import Header from '../Pages/Common/Header/Header';
import LeftSideNav from '../Pages/Common/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Common/RightSideNav/RightSideNav';
import Search from '../Pages/Search/Search';

const Main = () => {
    const { searchResult } = useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={2} className="d-none d-lg-block">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg={7}>
                        {
                            searchResult.length > 0 ?
                                <Search></Search>
                                :
                                <Outlet></Outlet>
                        }
                    </Col>
                    <Col lg={3}>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;