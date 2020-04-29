import React, { Component } from 'react';
import axios from 'axios';
import DropDown from './DropDown';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      selectedCountry: '',
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
  };

  render() {
    const { countriesList, selectedCountry } = this.state;
    return (
      <div>
        <div>Countries Page</div>
        <DropDown
          countriesList={countriesList}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Countries;
