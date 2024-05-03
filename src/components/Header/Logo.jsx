import logo from './logo-header.svg';
import {useLocation} from "react-router-dom";
import React from "react";

function Logo(props) {

    const {pathname} = useLocation();
    // console.log(pathname);
    return (
        <>
            <div className="logo">
                {pathname === "/" ? <img src={logo} alt="Logo"/> : <a href="/"><img src={logo} alt="Logo"/></a>}
            </div>
        </>
    )
}

export default Logo;