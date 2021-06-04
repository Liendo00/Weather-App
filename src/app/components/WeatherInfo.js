import React from 'react';

const WeatherInfo = (props) => {

    
    return (

        <div>
            
            {
                props.error && 
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }

            {
                props.temperature ? 

                    <div className ="card card-body">
                        <p>Locations: <b>{props.city}, {props.country}</b></p>
                        <p>Temperature: <b>{props.temperature} °C, {props.description}</b></p>
                        <p>Temperature max/min: <b>{props.temp_max}°C / {props.temp_min}°C</b></p>
                        <p>Humidity: <b>{props.humidity}%</b></p>
                        <p>Wind Speed: <b>{props.wind_speed} mph</b></p>
                    </div>
                :
                <div className="card card-body">
                    <p>No request yet</p>
                </div>
            }



        </div>

    )
}

export default WeatherInfo;