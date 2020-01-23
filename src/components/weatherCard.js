import React from 'react';
import ForecastCard from './forecastCard';

function WeatherCard(props) {
    if(props.forecast) {
        const next_three_days = props.forecast.list.slice(0, 12);
        const forecastByHour = next_three_days.map((inc) =>
            <ForecastCard key={inc.dt.toString()} forecast={inc}/>
        );
        return (
            <div className="card">
                <header className="card-header list">
                    <h2 className="card-header-title list-item">
                        {props.forecast.city.name}
                    </h2>
                    <p className="list-item">Today:<time dateTime="2020-1-1"> {props.today}</time></p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="is-grid">
                            {forecastByHour}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return <h1>loading...</h1>;
}

export default WeatherCard;