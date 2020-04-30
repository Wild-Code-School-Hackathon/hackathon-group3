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
    const url = `https://api.windy.com/api/webcams/v2/list/country=${countryId}?show=webcams:image,location&key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
    if (countryId !== 'default') {
      axios
        .get(url)
        .then((response) => response.data.result.webcams)
        .then((camsData) => this.setState({ camsList: camsData }));
    } else {
      this.setState({ camsList: [] });
    }
  };

  selectCam = (id) => {
    const selectedCamId = id;
    const { history } = this.props;
    history.push({
      pathname: '/webcamPage',
      state: {
        camId: selectedCamId,
      },
    });
  }

  render() {
    const { countriesList, camsList } = this.state;
    console.log(camsList)
    return (
      <div>
          <div className='dropdown-country-bg'>
            <DropDown
              optionsList={countriesList}
              handleChange={this.handleChange}
            />
          </div>
        {camsList.length !== 0 && <h3 className='cams-list-title'>Cams List</h3>}
        <div className='cams-list-wrapper'>
          {camsList.map((cam) => (
            <CamsList key={cam.id}
              name={cam.title}
              image={cam.image.current.thumbnail}
              id={cam.id}
              selectCam={this.selectCam} />
          ))}
        </div>
        <h3 className='suggested-title'>Suggested Countries</h3>
        <div className='cards-wrapper'>
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/963713/pexels-photo-963713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="South Africa"
              onClick={() => this.getCamsList('ZA')}
            />
            <h3 className='card-title'>South Africa</h3>
          </div>

          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Japan"
              onClick={() => this.getCamsList('JP')}
            />
            <h3 className='card-title'>Japan</h3>
          </div>

          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/1730403/pexels-photo-1730403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Portugal"
              onClick={() => this.getCamsList('PT')}
          />
          <h3 className='card-title'>Portugal</h3>
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/2868248/pexels-photo-2868248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Brazil"
              onClick={() => this.getCamsList('BR')}
            />
            <h3 className='card-title'>Brazil</h3>
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://cdn.pixabay.com/photo/2016/10/18/21/22/new-zealand-1751459_1280.jpg"
              alt="New Zealand"
              onClick={() => this.getCamsList('NZ')}
            />
            <h3 className='card-title'>New Zeland</h3>
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://cdn.pixabay.com/photo/2017/02/18/08/49/phang-nga-bay-2076833_1280.jpg"
              onClick={() => this.getCamsList('TH')}
              alt="Thailand"
            />
            <h3 className='card-title'>Thailand</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Countries;
