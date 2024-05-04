import React, {useState, useMemo} from 'react';
import RangeSlider from './RangeSlider';
import 'react-range-slider-input/dist/style.css';
import {useSearchParams} from "react-router-dom";
import TopTextLi from "../Header/TopTextLi";
import logo from "../Header/logo-header.svg";
import ShapesList from "./ShapesList";


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


    const [valuePrice, setValuePrice] = useState({min: 1200, max: 9000});
    const [valueCarats, setValueCarat] = useState({min: 0, max: 13});

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
                                type={'single'}
                                onChange={setValuePrice}
                                editable={false}
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


                                <ShapesList />

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