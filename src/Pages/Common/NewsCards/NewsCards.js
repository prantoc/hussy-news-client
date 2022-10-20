import React from 'react';
import { Card, Image, } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const NewsCards = ({ news }) => {
    const { _id, author, title, image_url, details, total_view, rating } = news;
    return (
        <>

            <Card className='mb-5 shadow border-0 bg-body rounded'>
                <Card.Header className='bg-light d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image roundedCircle style={{ height: '56px' }} src={author.img} />
                        <div className='ms-3'>
                            <span className='fw-bold d-block'>{author.name}</span>
                            <span className='text-secondary'>{author.published_date}</span>
                        </div>

                    </div>
                    <div className="text-muted">
                        <FaRegBookmark />
                        <FaShareAlt className='ms-2' />
                    </div>
                </Card.Header>

                <Card.Body>
                    <h4 className='text-center p-2'>{title}</h4>
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
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center bg-light">
                    <div>
                        <FaStar className='text-warning me-1' />
                        <small>{rating.number}</small>
                    </div>
                    <div>
                        <FaRegEye className='me-1' />
                        {total_view}
                    </div>
                </Card.Footer>
            </Card>


        </>
    );
};

export default NewsCards;