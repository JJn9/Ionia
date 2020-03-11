import React from 'react';
import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-xs-12 d-flex align-items-center head">
                    <div className="title text-center">
                        <span>Track your stats, anytime, anywhere.</span>   
                    </div>
                </div>
            </div>
        )
    }
}
export default Home