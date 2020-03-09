import React from 'react';
import './Builds.scss';

class Builds extends React.Component {
    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-lg-2 col-sm-12 col-xs-12 mr-5 ml-5 left-col">
                        <h1 className="text-center mt-5 title">Select a champion</h1>
                        <div className="line"></div>
                        <p className="undertext">
                            Choose any champion to access best pro builds !
                        </p>
                    </div>
                    <div className="col-lg-9 col-sm-12 col-xs-12 right-col">
                        <ul className="list-champions">
                        {this.props.champions.map(
                            champion => {
                                return (
                                    <li className="champion text-center" key={champion.id}><h2>{champion.name}</h2></li>
                                )
                            }
                        )}
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
}
export default Builds
