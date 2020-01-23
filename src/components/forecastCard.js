import React from 'react';
import formatDate from "../formatDate";

function ForecastCard(props) {
    return (
        <div className="box column">
            <h6 className="is-size-6">
                {formatDate(new Date(props.forecast.dt_txt))}
            </h6>
            <div className="columns">
                <span className="column is-size-7 has-text-danger">
                    {props.forecast.main.temp_max}&#176;
                </span>
                <span className="column is-size-7 has-text-info">
                    {props.forecast.main.temp_min}&#176;
                </span>
            </div>
            <div>
                {props.forecast.weather.map((w, index) =>
                    <h6 key={index + w.id}>{w.description}</h6>
                )}
            </div>
        </div>
    )
}

export default ForecastCard;