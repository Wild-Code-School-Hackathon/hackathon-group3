import React from 'react';
import axios from 'axios';

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countriesList: [],
      selectedCountry: '',
    };
  }
  imageClick = (id) => {
    const url = `https://api.windy.com/api/webcams/v2/list/country=${id}?key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  };
  render() {
    return (
      <div>
        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/963713/pexels-photo-963713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="South Africa"
            onClick={() => this.imageClick('ZA')}
          />
        </div>

        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/2758567/pexels-photo-2758567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Japan"
            onClick={() => this.imageClick('JP')}
          />
        </div>

        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/1730403/pexels-photo-1730403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Portugal"
            onClick={() => this.imageClick('PT')}
          />
        </div>
        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/2868248/pexels-photo-2868248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Brazil"
            onClick={() => this.imageClick('BR')}
          />
        </div>
        <div>
          <img
            className="country-card"
            src="https://cdn.pixabay.com/photo/2016/10/18/21/22/new-zealand-1751459_1280.jpg"
            alt="New Zealand"
            onClick={() => this.imageClick('NZ')}
          />
        </div>
        <div>
          <img
            className="country-card"
            src="https://cdn.pixabay.com/photo/2017/02/18/08/49/phang-nga-bay-2076833_1280.jpg"
            onClick={() => this.imageClick('TH')}
            alt="Thailand"
          />
        </div>
      </div>
    );
  }
}

export default Countries;
