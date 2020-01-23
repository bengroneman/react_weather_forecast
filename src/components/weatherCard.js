import React from 'react';
import DayCard from './dayCard';

function WeatherCard(props) {
    if(props.forecast !== null) {
        const next_six_hours = props.forecast.list.slice(0, 6);
        const forecastByHour = next_six_hours.map((inc) =>
            <DayCard key={inc.dt.toString()} forecast={inc}/>
        );
        return (
            <div className="card is-3">
                <header className="card-header list">
                    <h2 className="card-header-title list-item">
                        {props.forecast.city.name}
                    </h2>
                    <p className="list-item">Today:<time dateTime="2020-1-1"> {props.today}</time></p>
                    <p className="list-item"></p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="columns">
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