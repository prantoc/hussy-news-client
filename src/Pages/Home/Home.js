import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Common/NewsCards/NewsCards';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <>
            {
                allNews.map(news =>
                    <NewsCards key={news._id} news={news}></NewsCards>
                )
            }

        </>
    );
};

export default Home;