import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import NewsCards from '../Common/NewsCards/NewsCards';

const Search = () => {
    const { searchResult } = useContext(AuthContext)
    // console.log(searchResult);
    return (
        <>
            {
                searchResult.length > 0 ?
                    searchResult.map(news =>
                        <NewsCards key={news._id} news={news}></NewsCards>
                    )

                    :
                    <p className='btn btn-danger col-12 text-center'>Data Not Found</p>
            }
        </>
    );
};

export default Search;