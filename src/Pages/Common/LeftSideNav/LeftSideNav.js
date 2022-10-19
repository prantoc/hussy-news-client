import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default LeftSideNav;