import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(pressure => pressure.main.pressure);
    const humidity = cityData.list.map(humidity => humidity.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord; //Destructuring

    console.log(cityData, temps);
    return (
      <tr key={name}>
        <td><Map lon={lon} lat={lat} /> ></td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressure} color="green" units="hPa"/></td>
        <td><Chart data={humidity} color="blue" units="%"/></td>
      </tr>
    )
  }

  render () {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
             <th>City</th>
             <th>Temperature (K)</th>
             <th>Pressure (hPa)</th>
             <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>

    );


  }


}

// //weather from weather reducer
// function mapStateToProps(state) {
//   return {weather: state.weather};
// }

//ES6
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
