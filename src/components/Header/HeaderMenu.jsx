import React from 'react';
import MenuLink from './MenuLink';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function HeaderMenu(props) {

    return (
        <>
            <Router>
                <Routes>
                    <Route path={props.link} element={<MenuLink
                        link={props.link}
                        sub={props.hasItem}
                        description={props.description}
                    />}/>
                </Routes>
            </Router>
        </>
    )
}

export default HeaderMenu;

<button className={index === activeShape ? 'single-shape active' : 'single-shape'} key={index}>
    <div className="ic">
        <img src="./" alt=""/>
    </div>

</button>