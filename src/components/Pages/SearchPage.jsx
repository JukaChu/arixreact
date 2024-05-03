import React from 'react';
import Header from '../Header/Header';
import Footer from "../Footer";
import SearchTemplate from "../Search/SearchTemplate";

const SearchPage = () => {
    return (
        <>
            <Header title='Home Page'/>

            <main>
                <SearchTemplate/>
            </main>

            <Footer/>
        </>
    );
};

export default SearchPage;