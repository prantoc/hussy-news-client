import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Common/NewsCards/NewsCards';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <>
            {
                allNews.length > 0 ?
                    allNews.map(news =>
                        <NewsCards key={news._id} news={news}></NewsCards>
                    )

                    :
                    <p className='btn btn-danger col-12 text-center'>Data Not Found</p>
            }
        </>
    );
};

export default Home;