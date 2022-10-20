import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const NewsCards = ({ news }) => {
    const { _id, author, title, image_url, details } = news;
    return (
        <>
            <Card className='mb-5 p-2 shadow border-0 bg-body rounded'>
                <Row className='border-bottom py-2'>
                    <Col md="7" className='d-flex'>
                        <div>
                            <Image roundedCircle style={{ height: '56px' }} src={author.img} />
                        </div>
                        <div className='ms-3'>
                            <span className='fw-bold d-block'>{author.name}</span>
                            <span className='text-secondary'>{author.published_date}</span>
                        </div>

                    </Col>
                    <Col md="5" className="text-end">
                        <FaShareAlt />
                        <FaShareAlt className='ms-2' />
                    </Col>
                </Row>
                <h4 className='text-center mt-4'>{title}</h4>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='mt-2 text-secondary'>
                        {
                            details.length > 250 ?
                                <>
                                    {details.slice(0, 250) + '... '}
                                    <Link className='text-primary' to={`/news/${_id}`}>Read More</Link>
                                </>
                                :
                                <>
                                    {details}
                                </>
                        }
                    </Card.Text>
                </Card.Body>
                <hr />
                <Row>
                    <Col col={6}>
                        <Image fluid roundedCircle style={{ height: '56px' }} src={author.img} />
                        <span className='ms-2'>{news.author.name}</span>
                    </Col>
                    <Col col={6}>
                    </Col>
                </Row>
            </Card>

        </>
    );
};

export default NewsCards;