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
                            <button id="submit"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" viewBox="0 0 512 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"/></g></svg></button>   
                        </div>
                    </div>
                </div>
                <div className="row underinput-col">
                    <div className="col-lg-6 col-sm-6 col-xs-12 d-flex align-items-center justify-content-center column-direction">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="users" className="svg-inline--fa fa-users fa-w-20" role="img" viewBox="0 0 640 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M96 224a64 64 0 1 0-64-64 64.06 64.06 0 0 0 64 64zm480 32h-64a63.81 63.81 0 0 0-45.1 18.6A146.27 146.27 0 0 1 542 384h66a32 32 0 0 0 32-32v-32a64.06 64.06 0 0 0-64-64zm-512 0a64.06 64.06 0 0 0-64 64v32a32 32 0 0 0 32 32h65.9a146.64 146.64 0 0 1 75.2-109.4A63.81 63.81 0 0 0 128 256zm480-32a64 64 0 1 0-64-64 64.06 64.06 0 0 0 64 64z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M396.8 288h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 128 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 396.8 288zM320 256a112 112 0 1 0-112-112 111.94 111.94 0 0 0 112 112z"/></g></svg>
                        <h2 id="col-title">Track your <span className="green">summoner</span>'s stats</h2>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12 d-flex align-items-center justify-content-center column-direction">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="books" className="svg-inline--fa fa-books fa-w-18" role="img" viewBox="0 0 576 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M96 0H32A32 32 0 0 0 0 32v64h128V32A32 32 0 0 0 96 0zM0 384h128V128H0zm0 96a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H0zm513.62-17.78L401.08 42.71l-60.26 16.14 112.35 418.8c.11.39.2.79.29 1.18l60.29-16.15c-.04-.15-.09-.3-.13-.46zM160 480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H160zM256 0h-64a32 32 0 0 0-32 32v64h124.79l-8-29.65a23.94 23.94 0 0 1 11.17-27V32A32 32 0 0 0 256 0zm-96 384h128V128H160z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M0 416h128v-32H0zm0-288h128V96H0zm575.17 317.65L460.39 17.78a23.89 23.89 0 0 0-29.18-17h-.09L415.73 5a24 24 0 0 0-16.9 29.36l114.79 427.86a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.35zM160 416h128v-32H160zM338.39 49.78a23.89 23.89 0 0 0-29.18-17h-.09L293.73 37a24 24 0 0 0-16.9 29.36l8 29.65H160v32h128V108l103.62 386.22a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.33z"/></g></svg>
                        <h2 id="col-title">Access the lastest <span className="green">pro</span> builds</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home