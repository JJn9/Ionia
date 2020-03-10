import React from 'react';
import './Builds.scss';

class Builds extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 mr-5 ml-5 left-col">
                    <h1 className="text-center mt-3 title2">Select a champion</h1>
                    <div className="line"></div>
                    <div className="swords">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="swords" className="svg-inline--fa fa-swords fa-w-16" role="img" viewBox="0 0 512 512"><g className="fa-group"><path className="sword-secondary" fill="currentColor" d="M153.37 278.63L100 332l-24.69-24.69a16 16 0 0 0-22.62 0l-17.54 17.53a16 16 0 0 0-2.79 18.87l31.64 59-59.31 59.35a16 16 0 0 0 0 22.63l22.62 22.62a16 16 0 0 0 22.63 0L109.25 448l59 31.64a16 16 0 0 0 18.87-2.79l17.53-17.54a16 16 0 0 0 0-22.62L180 412l53.37-53.37zM496.79.14l-78.11 13.2-140 140 80 80 140-140 13.2-78.11A13.33 13.33 0 0 0 496.79.14z" opacity="0.4"/><path className="sword-primary" fill="currentColor" d="M389.37 309.38l-296-296L15.22.14A13.32 13.32 0 0 0 .14 15.22l13.2 78.11 296 296.05zm117.94 152.68L448 402.75l31.64-59a16 16 0 0 0-2.79-18.87l-17.54-17.53a16 16 0 0 0-22.63 0L307.31 436.69a16 16 0 0 0 0 22.62l17.53 17.54a16 16 0 0 0 18.87 2.79l59-31.64 59.31 59.31a16 16 0 0 0 22.63 0l22.62-22.62a16 16 0 0 0 .04-22.63z"/></g></svg>
                    </div>
                    <p className="undertext">
                        Choose any champion to access best pro builds !
                    </p>
                </div>
                <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-xs-12 right-col">
                    <ul className="list-champions">
                        {this.props.champions}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Builds
