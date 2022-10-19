import React, { useEffect, useState } from 'react';
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
        <div>
            <h4>All Category {categories.length}</h4>
            <div>
                {categories.map(cat => <p key={cat.id}><Link to={`/category/${cat.id}`}>{cat.name}</Link></p>)}
            </div>
        </div>
    );
};

export default LeftSideNav;