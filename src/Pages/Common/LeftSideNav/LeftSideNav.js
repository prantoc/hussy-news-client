import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/news-category`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <h4>All Category</h4>
            <div>
                {categories.map(cat =>
                    <p key={cat.id}>
                        <LinkContainer to={`/category/${cat.id}`}>
                            <Link>{cat.name}</Link>
                        </LinkContainer>
                    </p>)}
            </div>
        </>
    );
};

export default LeftSideNav;