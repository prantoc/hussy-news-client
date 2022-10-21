import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Common/NewsCards/NewsCards';

const Category = () => {
    const news = useLoaderData();
    return (
        <>
            {
                news.length > 0 ?
                    news.map(news =>
                        <NewsCards key={news._id} news={news}></NewsCards>
                    )

                    :
                    <p className='btn btn-danger col-12 text-center'>Data Not Found</p>
            }
        </>
    );
};

export default Category;