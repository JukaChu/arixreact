import React from 'react';
import {Link} from "react-router-dom";

function MenuLink(props) {

    return (
        <>
            <li>
                <Link to={props.link}>{props.description}</Link>
            </li>
        </>
    )
}

export default MenuLink;

