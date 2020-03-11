import React from 'react';
import './Home.scss';
import Nami from '../../../assets/images/nami.png'
import Ashe from '../../../assets/images/ashe.png'


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 d-flex align-items-center head">
                        <div className="title text-center">
                            <span>Track your stats, anytime, anywhere.</span>   
                        </div>
                        <img src={Nami} alt="" className="champion-nami"></img>
                        <img src={Ashe} alt="" className="champion-ashe"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 d-flex align-items-center input-col">
                        <div className="above-input text-center">
                            <span>Begin now :</span>   
                        </div>
                        <div className="d-flex align-items-center h-100 input-wrapper">
                            <input type="text" id="profile-selector" placeholder="Enter a summoner name"/>
                            <button id="submit">Go</button>   
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Home