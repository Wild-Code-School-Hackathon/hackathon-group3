import React, { Component } from 'react';
import axios from 'axios';
import DropDown from './DropDown';
import CamsList from './CamsList';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      selectedCountry: '',
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
        const defaultOpt = { id: 'default', name: 'Please chose a country' };
        const updatedCountries = [defaultOpt, ...countriesData];
        this.setState({ countriesList: updatedCountries });
      });
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedCountry: value });
    this.getCamsList(value);
  };

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
    const { countriesList, selectedCountry, camsList } = this.state;

    return (
      <div>
        <div>Countries Page</div>
        <DropDown
          countriesList={countriesList}
          handleChange={this.handleChange}
        />
        {camsList.map((cam) => (
          <CamsList key={cam.id} name={cam.title} />
        ))}
      </div>
    );
  }
}

export default Countries;
