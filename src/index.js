import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fetchForecast from './fetchForecast';
import formatDate from './formatDate';

import WeatherCard from './components/weatherCard.js';

class App extends Component {
    state = {
        forecast_1: null,
        forecast_2: null,
        forecast_3: null,
        today: formatDate(new Date()),
    };
    render() {
        return (
            <section>
                <WeatherCard forecast={this.state.forecast_1} today={this.state.today}/>
                <WeatherCard forecast={this.state.forecast_2} today={this.state.today}/>
                <WeatherCard forecast={this.state.forecast_3} today={this.state.today}/>
            </section>
        )

    }
    componentDidMount() {
        fetchForecast('Lander').then(resolve => this.setState({forecast_1: resolve}));
        fetchForecast('Laramie').then(resolve => this.setState({forecast_2: resolve}));
        fetchForecast('Yellowstone County').then(resolve => this.setState({forecast_3: resolve}));
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
