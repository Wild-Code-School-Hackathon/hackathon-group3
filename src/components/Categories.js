import React from 'react';
import axios from 'axios';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      selectedCategories: '',
    };
  }
  imageClick = (name) => {
    const url = `https://api.windy.com/api/webcams/v2/list/country=${name}?key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
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
            src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Beach"
            onClick={() => this.imageClick('beach')}
          />
        </div>

        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Mountain"
            onClick={() => this.imageClick('mountain')}
          />
        </div>

        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/2214035/pexels-photo-2214035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="City"
            onClick={() => this.imageClick('city')}
          />
        </div>
        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Forest"
            onClick={() => this.imageClick('forest')}
          />
        </div>
        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Island"
            onClick={() => this.imageClick('island')}
          />
        </div>
        <div>
          <img
            className="country-card"
            src="https://images.pexels.com/photos/910307/pexels-photo-910307.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            onClick={() => this.imageClick('lake')}
            alt="Lake"
          />
        </div>
      </div>
    );
  }
}

export default Categories;
