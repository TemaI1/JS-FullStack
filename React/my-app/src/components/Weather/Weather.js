import React from "react";

const API_KEY = "4fadcfc02c2628116134ae657f9ebca4";

class Weather extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if(city){
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();

            this.setState({
                temp: parseInt(data.main.temp - 273.15),
                city: data.name,
                country: data.sys.country,
                error: "text error"
            });

            console.log(data);
        }
    }

    render(){
        return (
            <div className="Weather">
                <form onSubmit={this.gettingWeather}>
                    <input type="text" name="city" placeholder="Город" />
                    <button>Получить погоду</button>
                </form>
                { this.state.city !== undefined && 
                    <div>
                        <p>Температура: {this.state.temp}</p>
                        <p>Местоположение: {this.state.city} {this.state.country}</p>
                    </div>
               }
            </div>
          );
    }
}

export default Weather;