import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            {news.length}
        </div>
    );
};

export default Category;