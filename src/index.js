import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fetchForecast from './fetchForecast';
import formatDate from './formatDate';

import WeatherCard from './components/weatherCard.js';

const LOCATIONS = ['Lander', 'Laramie', 'Yellowstone County'];

class App extends Component {
    state = {
        forecast_1: null,
        forecast_2: null,
        forecast_3: null,
        today: formatDate(new Date()),
    };
    render() {
        return (
            <div>
                <WeatherCard forecast={this.state.forecast_1} today={this.state.today}/>
                <WeatherCard forecast={this.state.forecast_2} today={this.state.today}/>
                <WeatherCard forecast={this.state.forecast_3} today={this.state.today}/>
            </div>
        )

    }
    componentDidMount() {
        fetchForecast('Lander').then(resolve => this.setState({forecast_1: resolve}));
        fetchForecast('Laramie').then(resolve => this.setState({forecast_2: resolve}));
        fetchForecast('Yellowstone County').then(resolve => this.setState({forecast_3: resolve}));
    }
}

//fetchForecast('Lander').then(console.log);
//console.log(formatDate(new Date()));

ReactDOM.render(<App />, document.getElementById('root'));
