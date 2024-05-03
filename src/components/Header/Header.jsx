import TopTextLi from './TopTextLi';

import Logo from './Logo';

import {NavLink, useLocation} from "react-router-dom";

import React, {useState} from 'react';
import cartIc from "../../images/cart-ic.svg";
import favIc from "../../images/fav-ic.svg";
import diamondIc from "../../images/diamond-ic.svg";
import searchIc from "../../images/search-ic.svg";

const menuList = [
    {
        id: 1,
        link: '/engagement',
        description: 'Engagement',
        hasItem: true,
    },
    {
        id: 2,
        link: '/wedding',
        description: 'Wedding',
        hasItem: false,
    },
    {
        id: 3,
        link: '/diamonds',
        description: 'Diamonds',
        hasItem: true,
    },
    {
        id: 4,
        link: '/jewelry',
        description: 'Jewelry',
        hasItem: true,
    },
    {
        id: 5,
        link: '/about',
        description: 'About',
        hasItem: true,
    },
    {
        id: 6,
        link: '/appointment',
        description: 'Appointment',
        hasItem: false,
    },
    {
        id: 7,
        link: '/help',
        description: 'Help',
        hasItem: false,
    },


];

const Header = () => {
    const [navs] = useState(menuList);

    const textTop = [
        {
            id: 1,
            description: '24/7 CUSTOMER SERVICE ',
        },
        {
            id: 2,
            description: 'LIFETIME WARRANTY',
        },
        {
            id: 3,
            description: 'FREE INTERNATIONAL SHIPPING',
        },
        {
            id: 4,
            description: '100% MONEY BACK GUARANTEE',
        },

    ];
    const [isActive, setIsActive] = useState(0);

    const [isHome, setIsHome] = useState(true);

    const handlerFunction = (data) => {
        setIsActive(data);
    };

    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <>

            <header className="header">

                <div className="header-top">
                    <div className="container">
                        <div className="header-top__cont">
                            <a href="" className="tel">(646) 859-0718</a>

                            <ul className="top-text">
                                {textTop.map((text) => (

                                    <TopTextLi
                                        key={text.id.toString()}
                                        description={text.description}>
                                    </TopTextLi>

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="header-bot">
                    <div className="container">

                        <div className="header-bot__cont">

                            <Logo/>
                            <div className="burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="hidden-menu">


                                <div className="header-menu__cont">

                                    <ul className="menu">

                                        {navs.map((text, index) => (
                                            <li key={index} className={text.hasItem === true ? 'has-item' : ''}>

                                                {pathname === text.link ?
                                                    <span className='menu-link active'>{text.description}</span> :
                                                    <NavLink
                                                        to={text.link}
                                                        className='menu-link'>
                                                        {text.description}
                                                    </NavLink>
                                                }

                                            </li>
                                        ))}

                                    </ul>
                                </div>

                                <div className="header-controls">
                                    <div className="controls-link">
                                        <a href="/search">
                                            <img src={searchIc} alt="Search"/>
                                        </a>
                                    </div>
                                    <div className="controls-link">
                                        <a href="">
                                            <img src={favIc} alt="Favorites"/>
                                        </a>
                                    </div>
                                    <div className="controls-link">
                                        <a href="">
                                            <img src={diamondIc} alt="Diamonds"/>
                                        </a>
                                    </div>
                                    <div className="controls-link">
                                        <a href="">
                                            <img src={cartIc} alt="Cart"/>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </>
    )
};

export default Header;