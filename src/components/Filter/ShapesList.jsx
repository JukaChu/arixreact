import React, {useState, useMemo, useEffect} from 'react';
import json from '../../data/data'
import SingleShape from "./SingleShape";

function Shapes() {

    const [data, setData] = useState([]);
    const [activeShape, setActiveShape] = useState(0);
    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                // console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                // console.log(myJson);
                setData(myJson['shapes']);
                // console.log(data['shapes']);
                // console.log(data);
            });
    };
    useEffect(() => {
        getData();

        // console.log(data['shapes']);
        // console.log(data);
    }, []);
    console.log(data);

    return (

        <div className="shapes-list">

            {
                data.map((item, index) => (

                    <SingleShape
                        key={index}
                        obj={item['shape']}
                        index={index}
                        active={activeShape}
                    />

                ))
            }

        </div>

    )
}

export default Shapes;