import React, { Component } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";

import {WEATHER_KEY} from "./keys";

class App extends Component {

    state ={
        temperature: '',
        temp_min:'',
        temp_max:'',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getWeather = async e => {
        e.preventDefault();

   
        const { city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {

            const API_URL =`http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&APPID=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
    
    
            this.setState({
                temperature: data.main.temp,
                temp_min:data.main.temp_min,
                temp_max:data.main.temp_max,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            })

        } else {
            this.setState({error: 'Please Enter a city and a country'})
        }


      
    }


    render() {
        return (
            <div id="container" className = "container p-4 mt-0">
                <div className="row align-middle">
                    <div className="col-md-4 mx-auto">
                        
                        <img className="img-fluid"  src="../../logo.png" type="image/png" height="150" width="400" />

                        <WeatherForm  getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
