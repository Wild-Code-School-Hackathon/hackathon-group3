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
    const url = `https://api.windy.com/api/webcams/v2/list/category=${categoryName}?key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
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
        <div>Categories Page</div>
        <DropDown
          optionsList={categoriesList}
          handleChange={this.handleChange}
        />
        {camsList.map((cam) => (
          <CamsList key={cam.id} name={cam.title} id={cam.id} selectCam={this.selectCam} />
        ))}
      </div>
    );
  }
}

export default Categories;

// beach mountain city forest island lake
