import React from 'react';
import './ChampionDetails.scss';

class ChampionDetails extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    {this.props.champion}
                </div>
            </div>
        )
    }
}
export default ChampionDetails
