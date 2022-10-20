import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const newsDetails = useLoaderData();
    return (
        <div>
            News id ({newsDetails._id})
        </div>
    );
};

export default News;