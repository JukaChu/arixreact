import React, {useState, useMemo} from 'react';
import RangeSlider from './RangeSlider';
import 'react-range-slider-input/dist/style.css';
import {useSearchParams} from "react-router-dom";
import TopTextLi from "../Header/TopTextLi";
import logo from "../Header/logo-header.svg";
import ShapesList from "./ShapesList";
import resetIc from "./images/reset-ic.svg";


function handleSubmit(event, type) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    let params;
    // console.log(type);
    event.target.closest('.type-button').classList.toggle('active');

    if (event.target.classList.contains('active')) {
        // params = searchParams.get(type);
    } else {
        // params = searchParams.delete(type);
    }
    // setSearchParams(params);
}


const Filter = () => {
    const defaultTab = 0;
    const [activeTab, setActiveTab] = useState(0);


    const handleTabsType = (e) => {
        // update the state to tab1
        setActiveTab(e);
    };


    const params4 = new URLSearchParams({
        natural: 'natural diamond',
        lab: 'lab diamond',
        moissanite: 'MOISSANITE'

    });
    let [searchParams, setSearchParams] = useSearchParams(params4);


    const total = useMemo(() => handleSubmit, []);
    const typesFilter = [
        {
            id: 1,
            type: 'natural',
            description: 'natural diamond',
        },
        {
            id: 2,
            type: 'lab',
            description: 'lab diamond',
        },
        {
            id: 3,
            type: 'moissanite',
            description: 'MOISSANITE',
        },


    ];

    // console.log(searchParams.getAll());
    // handleSubmit();

    const defaultPrice = {min: 100, max: 15000};
    const [valuePrice, setValuePrice] = useState({min: 1200, max: 9000});

    const defaultCarat = {min: 0, max: 13};
    const [valueCarats, setValueCarat] = useState({min: 2, max: 10});

    const defaultCalarity = {min: 0, max: 8};
    const [valueClarity, setValueClarity] = useState({min: 1, max: 7});
    const clarities = ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL'];

    const defaultCut = {min: 0, max: 4};
    const [valueCut, setValueCut] = useState({min: 2, max: 4});
    const cuts = ['Good', 'Very good', 'Ideal', 'Astor ideal'];

    const defaultColor = {min: 0, max: 8};
    const [valueColor, setValueColor] = useState({min: 2, max: 6});
    const colors = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D'];

    const defaultShape = 0;
    const [activeShape, setActiveShape] = useState(0);

    function toggleClass(e) {
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.toggle('open');
    }

    const handleDefault = (e) => {
        setActiveTab(defaultTab);
        setValueColor(defaultColor);
        setValueCut(defaultCut);
        setValueClarity(defaultCalarity);
        setValueCarat(defaultCarat);
        setValuePrice(defaultPrice);
        setActiveShape(defaultShape);
    };

    return (
        <>
            <div className="filter-wrap">
                <div className="filter-line filter-type">
                    <div className="container">
                        <div className="filter-cont">
                            <div className="filter-element">
                                <p>Type</p>

                                <div className="filter-type-buttons">

                                    {typesFilter.map((type, index) => (

                                        <button key={type.id.toString()}
                                                className={activeTab === index ? "type-button active" : "type-button"}
                                                onClick={(event) => {
                                                    handleTabsType(index);
                                                }}>
                                            <div>
                                                <p>{type.description}</p>
                                            </div>
                                        </button>


                                    ))}

                                </div>


                            </div>
                            <RangeSlider
                                key={1}
                                name={'Price'}
                                min={100}
                                max={15000}
                                step={10}
                                currency={'$'}
                                value={valuePrice}
                                type={'double'}
                                onChange={setValuePrice}
                                editable={true}
                                steps={false}
                                labels={false}
                            />

                            <RangeSlider
                                key={2}
                                name={'Carat'}
                                min={0}
                                max={13}
                                step={1}
                                currency={'ct'}
                                value={valueCarats}
                                type={'double'}
                                onChange={setValueCarat}
                                editable={false}
                                steps={false}
                                labels={false}
                            />
                            {/*<RangeSlider/>*/}

                        </div>
                    </div>
                </div>

                <div className="filter-line filter-shape">
                    <div className="container">
                        <div className="filter-cont">
                            <div className="filter-element">
                                <p>Shape</p>


                                <ShapesList
                                    activeShape={activeShape}
                                    setActiveShape={setActiveShape}
                                />

                            </div>
                        </div>
                    </div>

                </div>

                <div className="filter-line filter-clarities">
                    <div className="container">
                        <div className="filter-cont">

                            <RangeSlider
                                key={3}
                                name={'Clarity'}
                                min={0}
                                max={8}
                                step={1}
                                currency={''}
                                value={valueClarity}
                                type={'double'}
                                onChange={setValueClarity}
                                editable={false}
                                steps={true}
                                labels={clarities}

                            />

                            <RangeSlider
                                key={4}
                                name={'Cut'}
                                min={0}
                                max={4}
                                step={1}
                                currency={''}
                                value={valueCut}
                                type={'double'}
                                onChange={setValueCut}
                                editable={false}
                                steps={true}
                                labels={cuts}
                            />
                            <RangeSlider
                                key={5}
                                name={'Color'}
                                min={0}
                                max={8}
                                step={1}
                                currency={''}
                                value={valueColor}
                                type={'double'}
                                onChange={setValueColor}
                                editable={false}
                                steps={true}
                                labels={colors}
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-line filter-additive">
                    <div className="container">
                        <div className="filter-cont">
                            <button className="reset-filter" onClick={() => {
                                handleDefault();
                            }}>
                                <div className="img">
                                    <img src={resetIc} alt=""/>
                                </div>
                                <p>Reset filters</p>
                            </button>

                            <div className="more-filters">
                                <div className="button-more" onClick={(e) => {
                                    toggleClass(e);
                                }}>
                                    advanced filters
                                </div>

                                <div className="more-list">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
        ;
};

export default Filter;