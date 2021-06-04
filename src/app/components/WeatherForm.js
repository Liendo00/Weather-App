import React from 'react';

const WeatherForm = (props) => {
    return (
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group m-3">
                    <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus />
                </div>

                <div className="form-group m-3">
                    <input type="text" name="country" placeholder="Your Country Name" className="form-control"/>
                </div>
                <div className="align-items-center">
                    <button id="boton" className="btn btn-success ">Get Weather</button>
                </div>
            </form>
        </div>
    )
}

export default WeatherForm;