import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function randomNum(num) {
  return Math.floor(Math.random() * num);
}

class RandomCam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCam: '',
      randomCamId: '',
    };
  }

  componentDidMount() {
    this.getRandomCam();
    this.timerID = setInterval(() => this.getRandomCam(), 20000);
  }

  getRandomCam = () => {
    const i = randomNum(100);
    const url =
      'https://api.windy.com/api/webcams/v2/list?show=countries&key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym';
    axios
      .get(url)
      .then((response) => response.data.result.countries[i].id)
      .then((randomCountryId) => {
        const url = `https://api.windy.com/api/webcams/v2/list/country=${randomCountryId}?key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
        axios
          .get(url)
          .then(
            (response) =>
              response.data.result.webcams[
                randomNum(response.data.result.webcams.length)
              ].id
          )
          .then((camId) => {
            this.setState({ randomCamId: camId });
            const url = `https://api.windy.com/api/webcams/v2/list?show=webcams:player;webcam=${camId}&key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`;
            axios
              .get(url)
              .then(
                (response) =>
                  response.data.result.webcams[randomNum(10)].player.lifetime
                    .embed
              )
              .then((srcUrl) => {
                this.setState({ randomCam: srcUrl });
              });
          });
      });
  };

  

    render() {
        const { randomCam } = this.state;
        return(
            <div>
              <h3>Random Cam</h3>
                <iframe src={randomCam} title='random cam' allow='autoplay'/>
                <button onClick={this.selectCam}><Link to="/WebcamPage">go to radom cam</Link></button>
            </div>
        );
    } 
}

export default RandomCam;
