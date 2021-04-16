import React, { useState } from 'react';
import "./WeatherUI.css";

const WeatherUI = (props) => {    
    const [cityInput, setCityInput] = useState('');

    const addCityNameHandler = (event) => {
        var eventTargetValue = event.target.value;
        setCityInput(eventTargetValue);
    }

    return(
        <>
            <div className='weatherCardContainer'>
                <div className='weatherCard'>
                    <form>
                        <input type='text' value={cityInput} onChange={addCityNameHandler} placeholder='Enter the City...' name='cityInputField' autoFocus />
                        <button onClick={(event)=>{
                            event.preventDefault();
                            props.theCity(cityInput);
                        }}>
                            <i className="fas fa-search-location"> Search</i>
                        </button>
                    </form>
                </div>
            </div>         
        </>
    );
}
export default WeatherUI;