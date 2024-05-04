import {useLocation} from "react-router-dom";
import React from "react";


function SingleShape({obj, active, index}) {


    return (
        <>
            <button className={index === active ? 'single-shape active' : 'single-shape'}
                    id={'shape-id' + obj[0].shapeId}>
                <div className="ic">
                    <img src={require('./images/' + obj[2].image)} alt=""/>
                </div>
                <p>{obj[1].type}</p>
            </button>

        </>
    )
}

export default SingleShape;