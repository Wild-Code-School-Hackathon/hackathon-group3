import React from 'react';
import axios from 'axios';



class WebcamPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            camInfo: [],
        }
    }
    componentDidMount() {
        const { location } = this.props;
        const { camId } = location.state;
        const url = `https://api.windy.com/api/webcams/v2/list/webcam=${camId}?show=webcams:player,location&key=EjDBdKjXSKLRgpbFwOcQh2N6MbS8S3Ym`
        axios
            .get(url)
            .then((response) => response.data.result.webcams[0])
            .then((chosenCamInfo) => {
                this.setState({ camInfo: chosenCamInfo }) 
            })
    }
    render() {
        const { camInfo } = this.state;
        console.log(camInfo)
        return (
            <div>
                <h3>{camInfo.title}</h3>
               {camInfo.location && 
               <h3>{`${camInfo.location.city}, ${camInfo.location.country}`}</h3>}
               {camInfo.player &&
                 <iframe src={camInfo.player.lifetime.embed} title={camInfo.title}/>
               }
            </div >
        );
    }
}

export default WebcamPage;