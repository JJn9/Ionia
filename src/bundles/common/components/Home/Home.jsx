import React from 'react';
import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <main>
                <div className="row justify-content-center home">
                    <div className="col-lg-12 col-sm-12 col-xs-12 main">
                        <h1 className="text-center title1">Welcome to</h1>
                        <h1 className="text-center title-main"> Ionia</h1>
                    </div>
                </div>
            </main>
        )
    }
}
export default Home