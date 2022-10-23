import React, { useContext } from 'react';
import { Card, Image, } from 'react-bootstrap';
import Highlighter from 'react-highlight-words';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../../assets/css/NewsCards/NewsCards.css'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const NewsCards = ({ news }) => {
    const { searchQuery } = useContext(AuthContext)
    const { _id, author, title, image_url, details, total_view, rating } = news;
    return (
        <>
            <Card className='mb-5 shadow border-0 bg-body rounded'>
                <Card.Header className='bg-light d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image roundedCircle style={{ height: '56px' }} src={author.img} />
                        <div className='ms-3'>
                            <span className='fw-bold d-block'>{author.name ? author.name : "author"}</span>
                            <span className='text-secondary'>{author.published_date ? author.published_date : 'no-data'}</span>
                        </div>

                    </div>
                    <div className="text-muted">
                        <FaRegBookmark />
                        <FaShareAlt className='ms-2' />
                    </div>
                </Card.Header>
                <Card.Body>
                    <h4 className='text-center p-2'>
                        <Link to={`/news/${_id}`} className="text-dark newsTitle" style={{ textDecoration: 'none', lineHeight: '1.7' }}>
                            <Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={[searchQuery]}
                                autoEscape={true}
                                textToHighlight={title}
                            />
                        </Link>
                    </h4>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='mt-2 text-secondary' style={{ lineHeight: '1.7' }}>
                        <Highlighter
                            highlightClassName="YourHighlightClass"
                            searchWords={[searchQuery]}
                            autoEscape={true}
                            textToHighlight={details}
                        >
                            {
                                details.length > 250 ?
                                    <>
                                        {details.slice(0, 250) + '... '}
                                        <Link to={`/news/${_id}`}>Read More</Link>
                                    </>
                                    :
                                    <>
                                        {details}
                                    </>
                            }
                        </Highlighter>
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