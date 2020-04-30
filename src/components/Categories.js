import React, { Component } from 'react';
import axios from 'axios';
import DropDown from './DropDown';
import CamsList from './CamsList';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      camsList: [],
    };
  }

  componentDidMount() {
    const url =
      'https://api.windy.com/api/webcams/v2/list?show=categories&key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym';
    axios
      .get(url)
      .then((response) => response.data.result.categories)
      .then((categoriesData) => {
        const defaultOpt = { id: 'default', name: 'Please choose a category' };
        const updatedCategories = [defaultOpt, ...categoriesData];
        this.setState({ categoriesList: updatedCategories });
      });
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.getCamsList(value);
  };

  getCamsList = (categoryName) => {
    const url = `https://api.windy.com/api/webcams/v2/list/category=${categoryName}?show=webcams:image,location&key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
    if (categoryName !== 'default') {
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
    const { categoriesList, camsList } = this.state;

    return (
      <div>
          <div className='dropdown-category-bg'>
            <DropDown
              optionsList={categoriesList}
              handleChange={this.handleChange}
           />
          </div>
        {camsList.length !== 0 && <h3 className='cams-list-title'>Cams List</h3>}
        <div className='cams-list-wrapper'>
          {camsList.map((cam) => (
            <CamsList
              key={cam.id}
              name={cam.title}
              image={cam.image.current.thumbnail}
              id={cam.id}
              selectCam={this.selectCam}
            />
          ))}
        </div>
        <h3 className='suggested-title'>Suggested Categories</h3>
        <div className="cards-wrapper">
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Beach"
              onClick={() => this.getCamsList('beach')}
            />
            <h3 className='card-title'>Beach</h3>
          </div>

          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Mountain"
              onClick={() => this.getCamsList('mountain')}
            />
            <h3 className='card-title'>Mountain</h3>
          </div>

          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/2214035/pexels-photo-2214035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="City"
              onClick={() => this.getCamsList('city')}
            />
            <h3 className='card-title'>City</h3>
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Forest"
              onClick={() => this.getCamsList('forest')}
            />
            <h3 className='card-title'>Forest</h3>
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Island"
              onClick={() => this.getCamsList('island')}
            />
            <h3 className='card-title'>Island</h3>
          </div>
          <div className="card">
            <img
              className="country-card"
              src="https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              onClick={() => this.getCamsList('lake')}
              alt="Lake"
            />
            <h3 className='card-title'>Lake</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;


