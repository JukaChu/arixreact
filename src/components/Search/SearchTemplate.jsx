import React, {useState} from 'react';

import diamondSelect from "../../images/diamond-select.svg";
import diamondPicture from "./shapes/diamond-jpg.jpg";
import Filter from "../Filter/Filter";
import SearchDiamond from "../Search/SearchDiamond";

const SearchTemplate = () => {
    const stepIndex = ['SELECT YOUR STONE', 'SELECT YOUR SETTING', 'CONFIRM'];
    const [activeStep, setActiveStep] = useState(0);


    const handleStepType = (e) => {

        setActiveStep(e);
    };

    let diamondInfos = {
        name: '0.56 CARAT PEAR  \nNATURAL DIAMOND',
        text: {
            names: {
                1: 'Polish',
                2: 'Depth',
                3: 'Symmetry',
                4: 'Table',
                5: 'Measurements(in mm)',
                6: 'Fluorescence',
                7: 'Length/Width Ratio',
                8: 'Certificate',
            },
            items: {
                1: 'Excellent',
                2: '60.9%',
                3: 'Excellent',
                4: '61%',
                5: '7.34 x 4.55 x 2.77',
                6: 'Medium',
                7: '1.61',
                8: 'GIA',
            },

        }
    };
    //compare
    const [comparelistState, setCompareListState] = useState([]);

    const handleCompareList = (el) => {
        // console.log(el);
        el.stopPropagation();
        let number = Number(el.target.closest('.search-items__single').dataset.id);
        el.target.closest('.search-items__single').classList.toggle('wished');
        if (el.target.closest('.search-items__single').classList.contains('wished')) {

            setCompareListState([...comparelistState, number]);
        } else {
            setCompareListState(comparelistState.filter(task => task !== number));
        }

    };


    //favs
    const [favList, setFavListState] = useState([]);

    const handleFavList = (el) => {
        // console.log(el);
        el.stopPropagation();
        let number = Number(el.target.closest('.search-items__single').dataset.id);
        el.target.closest('.search-items__single').classList.toggle('faved');
        if (el.target.closest('.search-items__single').classList.contains('faved')) {

            setFavListState([...favList, number]);
        } else {
            setFavListState(favList.filter(task => task !== number));
        }

    };

    const testDel = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <div className="search-wrapper">
                <div className="search-top-tabs">
                    <div className="container">
                        <div className="search-top-tabs__wrap">
                            {stepIndex.map((st, index) => (
                                <div key={st}
                                     className={index === activeStep ? "single-search-tab active" : "single-search-tab"}>
                                    <div className="img">
                                        <img src={diamondSelect} alt="Diamond"/>
                                    </div>
                                    <p>{st}</p>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>

                <div className="search-tabs">
                    <div className={activeStep === 0 ? "search-tab active" : "search-tab"} >

                        <div className="search-filters">
                            <Filter/>
                        </div>
                        <div className="search-items">

                            <div className="search-items__head">
                                <div className="container">
                                    <span className="title-search">
                                        Select your TG created diamond
                                        <strong>(8003)</strong>
                                    </span>
                                </div>
                            </div>

                            <div className="search-items__content">
                                <div className="search-items__table-top">
                                    <div className="container">
                                        <div className="table-top">
                                            <div className="item-search-row">shape</div>
                                            <div className="item-search-row">carat</div>
                                            <div className="item-search-row">CLARITY</div>
                                            <div className="item-search-row">COLOR</div>
                                            <div className="item-search-row">CUT</div>
                                            <div className="item-search-row">PRICE (USD)</div>
                                            <div className="item-search-row">COMPARE</div>
                                            <div className="item-search-row">WISHLIST</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-items__list">
                                    {testDel.map((item, index) => (
                                        <SearchDiamond
                                            key={index}
                                            number={index}

                                            handleCompareList={handleCompareList}
                                            handleFavList={handleFavList}
                                            handleStepType={handleStepType}

                                            image={diamondPicture}
                                            diamondInfos={diamondInfos}
                                        />
                                    ))}


                                </div>

                            </div>

                        </div>
                    </div>
                    <div className={activeStep === 1 ? "search-tab active" : "search-tab"} >
                        <div className="container">
                            <p>STEP 1 DONE</p>
                        </div>
                    </div>
                    <div className={activeStep === 2 ? "search-tab active" : "search-tab"} >
                        <div className="container">
                            <p>Kuku</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SearchTemplate;