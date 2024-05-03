import {useLocation} from "react-router-dom";
import React from "react";

function RangeSlider({name, min, max, currency, value, onChange, step, type}) {


    const [minValue, setMinValue] = React.useState(value ? value.min : min);
    const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

    React.useEffect(() => {
        if (type === 'single') {
            setMinValue(value.min);
            setMaxValue(max);
        } else {
            setMinValue(value.min);
            setMaxValue(value.max);
        }

    }, [value]);

    const handleMinChange = e => {
        e.preventDefault();
        const newMinVal = Math.min(+e.target.value, maxValue - step);
        if (!value) setMinValue(newMinVal);


        console.log(maxValue);
        onChange({min: newMinVal, max: maxValue});
    };

    const handleMaxChange = e => {
        e.preventDefault();
        const newMaxVal = Math.max(+e.target.value, minValue + step);
        if (!value) setMaxValue(newMaxVal);
        onChange({min: minValue, max: newMaxVal});
    };

    let minPos = 0;
    let maxPos = 0;

    if (type === 'single') {
        minPos = ((minValue - min) / (max - min)) * 100;
        maxPos = 100;
    } else {
        minPos = ((minValue - min) / (max - min)) * 100;
        maxPos = ((maxValue - min) / (max - min)) * 100;
    }


    return (
        <>
            <div className="filter-element">
                <p>{name}</p>

                <div className="range-wrapper">
                    <div className={type === 'single' ? 'range-text range-text--single' : 'range-text'}>
                        <p className={min === value.min ? 'opac' : ''}>{currency}<span >{type === 'single' ? min : value.min}</span></p>
                        <p className="current-section">{currency}<span>{value.min}</span></p>
                        <p  className={max === value.max ? 'opac' : ''}>{currency}<span>{type === 'single' ? max : value.max}</span></p>
                    </div>
                    <div className="controls-range">


                        <div className={type === 'single' ? 'input-wrapper input-wrapper--single' : 'input-wrapper'}>
                            <input
                                className="input input--min"
                                type="range"
                                value={minValue}
                                min={min}
                                max={max}
                                step={step}
                                onChange={handleMinChange}
                            />
                            <input
                                className="input input--max"
                                type="range"
                                value={type === 'single' ? max : maxValue}
                                min={min}
                                max={max}
                                step={step}
                                onChange={handleMaxChange}
                            />

                        </div>
                        <div className="rails">
                            <div className="control" style={{left: `${minPos}%`}}>

                            </div>
                            <div className="rail">
                                <div className="inner-rail" style={{left: `${minPos}%`, right: `${100 - maxPos}%`}}/>
                            </div>
                            <div className={type === 'single' ? 'control hidden' : 'control'}
                                 style={{left: `${maxPos}%`}}></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RangeSlider;