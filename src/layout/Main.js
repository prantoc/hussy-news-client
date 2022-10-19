import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer/Footer';
import Header from '../Pages/Common/Header/Header';
import LeftSideNav from '../Pages/Common/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Common/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={2}>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg={7}>
                        <Outlet></Outlet>
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