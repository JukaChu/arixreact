import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import shapeImg from "./shapes/d4.svg";

function SearchDiamond({handleCompareList, number, handleFavList, diamondInfos, image, handleStepType}) {
    const [currentState, setCurrentState] = useState(false);


    function toggleClass(e) {
        e.target.closest('.search-items__single').classList.toggle('open');
    }

    return (
        <>
            <div className='search-items__single'
                 data-id={number}>
                <div className="search-diamond">
                    <div className="container">
                        <div className="search-diamond__top" onClick={(e) => {
                            toggleClass(e)
                        }}>
                            <div className="item-search-row">
                                <div className="shape-img">
                                    <img src={shapeImg} alt=""/>
                                </div>
                                <p>Pear</p>
                            </div>
                            <div className="item-search-row"><p>0.5</p></div>
                            <div className="item-search-row"><p>VS2</p></div>
                            <div className="item-search-row"><p>L</p></div>
                            <div className="item-search-row"><p>Very Good</p></div>
                            <div className="item-search-row"><p>$645 <strong>$835</strong></p></div>
                            <div className="item-search-row">
                                <div className="add-compare" onClick={(e) => {
                                    handleCompareList(e)
                                }}>
                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="path1"
                                              d="M13.3586 0H13.0313H6.10939L0.586914 7.58706L13.2553 20L13.7772 19.4884L25.9226 7.58706L20.4011 0H13.3586ZM19.1769 1.49133L18.157 6.01746L14.5482 1.49133H19.1769ZM13.2041 1.92254L17.1305 6.84407H9.36161L13.2041 1.92254ZM11.8657 1.49133L8.34708 5.99903V6.00014L7.33366 1.4914H11.8657V1.49133ZM6.1899 2.42326L7.18481 6.84407H2.97143L6.1899 2.42326ZM7.58599 8.16488L11.0698 15.7715L3.30629 8.16488H7.58599ZM13.2553 17.3703L9.03865 8.16488H17.4708L13.2553 17.3703ZM15.4397 15.7715L18.9235 8.16488H23.2021L15.4397 15.7715ZM19.3247 6.84407L20.3208 2.42326L23.5381 6.84407H19.3247Z"
                                        />
                                        <path className="path2"
                                              d="M6.55402 1.11816L1.30371 7.42908L13.4664 18.7638L24.4584 7.42908L19.7733 1.11816H6.55402Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="item-search-row">
                                <div className="add-favs" onClick={(e) => {
                                    handleFavList(e)
                                }}>
                                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="path1"
                                              d="M8.17331 0.97403C7.05212 0.475642 5.16252 1.18169 4.35788 1.59702L2.56644 2.76503L1.55371 5.02327L2.56644 9.22828L12.6117 19.1178L22.3456 8.68319L23.5136 6.73643L23.0464 4.55605L22.3456 2.76503L20.4767 0.97403H17.1282L14.5585 2.21993C14.0134 2.86886 12.8609 4.15112 12.6117 4.08883C12.3003 4.01096 9.57479 1.59702 8.17331 0.97403Z"
                                        />
                                        <path className="path2"
                                              d="M22.5426 6.09417C22.5426 2.435 20.0659 1.66667 17.9804 1.66667C16.0383 1.66667 13.8486 3.76333 13.1704 4.57C12.8575 4.9475 12.206 4.9475 11.8932 4.57C11.2158 3.7625 9.02604 1.66667 7.08319 1.66667C4.99768 1.66667 2.52094 2.435 2.52094 6.09417C2.52094 8.47667 4.93262 10.6908 4.95848 10.7167L12.5314 18.0083L20.0917 10.73C20.1309 10.6908 22.5426 8.4775 22.5426 6.09417ZM24.211 6.09417C24.211 9.21917 21.3439 11.8367 21.2262 11.9533L13.1061 19.7658C12.9501 19.9217 12.7407 20 12.5322 20C12.3236 20 12.1151 19.9217 11.9583 19.7658L3.8248 11.9275C3.72052 11.8367 0.852539 9.21917 0.852539 6.09417C0.852539 2.27917 3.1858 0 7.08319 0C9.36389 0 11.5019 1.79667 12.5314 2.8125C13.5608 1.79667 15.6988 0 17.9795 0C21.8769 0 24.211 2.27833 24.211 6.09417Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-diamond__cont">
                    <div className="container">
                        <div className="search-diamond__content">
                            <div className="diamond-image">
                                <div className="img">
                                    <img src={image} alt={diamondInfos.name}/>
                                </div>
                            </div>
                            <div className="diamond-right">
                                <div className="diamond-right__top">
                                    <span className="name-title">{diamondInfos.name}</span>

                                    <div className="diamond-right__controls">

                                        <div className="controls">
                                            <div className="add-compare" onClick={(e) => {
                                                handleCompareList(e)
                                            }}>
                                                <svg width="26" height="20" viewBox="0 0 26 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="path1"
                                                          d="M13.3586 0H13.0313H6.10939L0.586914 7.58706L13.2553 20L13.7772 19.4884L25.9226 7.58706L20.4011 0H13.3586ZM19.1769 1.49133L18.157 6.01746L14.5482 1.49133H19.1769ZM13.2041 1.92254L17.1305 6.84407H9.36161L13.2041 1.92254ZM11.8657 1.49133L8.34708 5.99903V6.00014L7.33366 1.4914H11.8657V1.49133ZM6.1899 2.42326L7.18481 6.84407H2.97143L6.1899 2.42326ZM7.58599 8.16488L11.0698 15.7715L3.30629 8.16488H7.58599ZM13.2553 17.3703L9.03865 8.16488H17.4708L13.2553 17.3703ZM15.4397 15.7715L18.9235 8.16488H23.2021L15.4397 15.7715ZM19.3247 6.84407L20.3208 2.42326L23.5381 6.84407H19.3247Z"
                                                    />
                                                    <path className="path2"
                                                          d="M6.55402 1.11816L1.30371 7.42908L13.4664 18.7638L24.4584 7.42908L19.7733 1.11816H6.55402Z"/>
                                                </svg>
                                                <p>COMPARE</p>
                                            </div>

                                            <div className="add-favs" onClick={(e) => {
                                                handleFavList(e)
                                            }}>
                                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="path1"
                                                          d="M8.17331 0.97403C7.05212 0.475642 5.16252 1.18169 4.35788 1.59702L2.56644 2.76503L1.55371 5.02327L2.56644 9.22828L12.6117 19.1178L22.3456 8.68319L23.5136 6.73643L23.0464 4.55605L22.3456 2.76503L20.4767 0.97403H17.1282L14.5585 2.21993C14.0134 2.86886 12.8609 4.15112 12.6117 4.08883C12.3003 4.01096 9.57479 1.59702 8.17331 0.97403Z"
                                                    />
                                                    <path className="path2"
                                                          d="M22.5426 6.09417C22.5426 2.435 20.0659 1.66667 17.9804 1.66667C16.0383 1.66667 13.8486 3.76333 13.1704 4.57C12.8575 4.9475 12.206 4.9475 11.8932 4.57C11.2158 3.7625 9.02604 1.66667 7.08319 1.66667C4.99768 1.66667 2.52094 2.435 2.52094 6.09417C2.52094 8.47667 4.93262 10.6908 4.95848 10.7167L12.5314 18.0083L20.0917 10.73C20.1309 10.6908 22.5426 8.4775 22.5426 6.09417ZM24.211 6.09417C24.211 9.21917 21.3439 11.8367 21.2262 11.9533L13.1061 19.7658C12.9501 19.9217 12.7407 20 12.5322 20C12.3236 20 12.1151 19.9217 11.9583 19.7658L3.8248 11.9275C3.72052 11.8367 0.852539 9.21917 0.852539 6.09417C0.852539 2.27917 3.1858 0 7.08319 0C9.36389 0 11.5019 1.79667 12.5314 2.8125C13.5608 1.79667 15.6988 0 17.9795 0C21.8769 0 24.211 2.27833 24.211 6.09417Z"
                                                    />
                                                </svg>
                                                <p>WISHLIST</p>
                                            </div>
                                        </div>
                                        <div className="btns">
                                            <a href="" className="btn btn--blue btn-select"
                                               onClick={(event) => {
                                                   event.stopPropagation();
                                                   event.preventDefault();
                                                   handleStepType(1);
                                               }}
                                            >select this stone</a>
                                            <a href="" className="btn btn--white btn-buy">Purchase without setting</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="diamond-right__bot">
                                    <div className="diamond-info__table">
                                        {Object.values(diamondInfos.text.names).map((itm, k) => (
                                            <div key={k} className="diamond-info__line">
                                                <span>{itm}</span>
                                                <p>{diamondInfos.text.items[k + 1]}</p>
                                            </div>
                                        ))}


                                        <a href="" className="link-lined">View Certificate</a>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchDiamond;