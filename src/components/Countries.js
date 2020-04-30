import React, { Component } from 'react';
import axios from 'axios';
import DropDown from './DropDown';
import CamsList from './CamsList';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      camsList: [],
    };
  }

  componentDidMount() {
    const url =
      'https://api.windy.com/api/webcams/v2/list?show=countries&key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym';
    axios
      .get(url)
      .then((response) => response.data.result.countries)
      .then((countriesData) => {
        const defaultOpt = { id: 'default', name: 'Please choose a country' };
        const updatedCountries = [defaultOpt, ...countriesData];
        this.setState({ countriesList: updatedCountries });
      });
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.getCamsList(value)
  }

  getCamsList = (countryId) => {
    const url = `https://api.windy.com/api/webcams/v2/list/country=${countryId}?key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
    if (countryId !== 'default') {
      axios
        .get(url)
        .then((response) => response.data.result.webcams)
        .then((camsData) => this.setState({ camsList: camsData }));
    } else {
      this.setState({ camsList: [] });
    }
  };

  render() {
    const { countriesList, camsList } = this.state;
    return (
      <div>
        <div>Countries Page</div>
        <DropDown
          optionsList={countriesList}
          handleChange={this.handleChange}
        />
        {camsList.map((cam) => (
          <CamsList key={cam.id} name={cam.title} />
        ))}
        <h3>Suggested Countries</h3>
        <div className='cards-wrapper'>
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/963713/pexels-photo-963713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="South Africa"
              onClick={() => this.getCamsList('ZA')}
            />
          </div>

          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Japan"
              onClick={() => this.getCamsList('JP')}
            />
          </div>

          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/1730403/pexels-photo-1730403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Portugal"
              onClick={() => this.getCamsList('PT')}
          />
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/2868248/pexels-photo-2868248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Brazil"
              onClick={() => this.getCamsList('BR')}
            />
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://cdn.pixabay.com/photo/2016/10/18/21/22/new-zealand-1751459_1280.jpg"
              alt="New Zealand"
              onClick={() => this.getCamsList('NZ')}
            />
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://cdn.pixabay.com/photo/2017/02/18/08/49/phang-nga-bay-2076833_1280.jpg"
              onClick={() => this.getCamsList('TH')}
              alt="Thailand"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Countries;
