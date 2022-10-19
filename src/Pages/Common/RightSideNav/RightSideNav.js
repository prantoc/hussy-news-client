import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord, FaTwitch } from 'react-icons/fa';
import Slider from '../Slider/Slider';
const RightSideNav = () => {
    return (
        <>
            <div>
                <Button variant="outline-primary" className='d-block col-12 my-2 rounded-bottom'> <FaGoogle /> Login via Google</Button>
                <Button variant="outline-dark" className='d-block col-12 rounded-bottom'><FaGithub />Login via Github</Button>
            </div>
            <div className='mt-3'>
                <span>Find us on:</span>

                {
                    [{ name: "facebook", icon: <FaFacebook /> }, { name: "YouTube", icon: <FaYoutube /> }, { name: "Twitter", icon: <FaTwitter /> }, { name: "WhatsApp", icon: <FaWhatsapp /> }, { name: "Discord", icon: <FaDiscord /> }, { name: "Privacy Policy", icon: <FaTwitch /> }, { name: "Terms & Conditions", icon: 'FaFacebook' }].map((social, i) =>
                        <Link key={i} to="facebook" className={`shadow-sm p-2 border border-1 mb-1 bg-body d-block nav-link rounded-${i === 0 ? 'top' : i === 6 ? "bottom" : ""}`}>{social.icon} {social.name}</Link>
                    )
                }
            </div>

            <div className='mt-3'>
                <span className='fw-bold'>Editorials:</span>
                <Card >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='mt-3'>
                <Slider></Slider>
            </div>

        </>
    );
};

export default RightSideNav;