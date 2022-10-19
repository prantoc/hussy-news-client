import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    return (
        <>
            <div className="signin-buttons">
                <Button variant="outline-primary d-block col-12 my-2">Login via Google</Button>
                <Button variant="outline-dark d-block col-12">Login via Github</Button>
            </div>
            <div className='mt-3'>
                <span>Find on us:</span>

                {
                    ["facebook", "YouTube", "Twitter", "WhatsApp", "Discord", "Privacy Policy", "Terms & Conditions"].map((social, i) =>
                        <Link key={i} to="facebook" className="shadow-sm p-2 border border-1 mb-1 bg-body rounded-top d-block nav-link">{social}</Link>
                    )
                }
            </div>

        </>
    );
};

export default RightSideNav;