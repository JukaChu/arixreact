import React from 'react';

import diamondSelect from "../../images/diamond-select.svg";
import Filter from "../Filter/Filter";

const SearchTemplate = () => {
    return (
        <>
            <div className="search-wrapper">
                <div className="search-top-tabs">
                    <div className="container">
                        <div className="search-top-tabs__wrap">
                            <div className="single-search-tab active">
                                <div className="img">
                                    <img src={diamondSelect} alt="Diamond"/>
                                </div>
                                <p>SELECT YOUR STONE</p>
                            </div>

                            <div className="single-search-tab">
                                <div className="img">
                                    <img src={diamondSelect} alt="Diamond"/>
                                </div>
                                <p>SELECT YOUR SETTING</p>
                            </div>

                            <div className="single-search-tab">
                                <div className="img">
                                    <img src={diamondSelect} alt="Diamond"/>
                                </div>
                                <p>CONFIRM</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="search-tabs">
                    <div className="search-tab active">

                        <div className="search-filters">
                            <Filter/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SearchTemplate;