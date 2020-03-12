import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ionia from './bundles/assets/images/Ionia.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

//Components
import { Home } from './bundles/common/components/Home';
import { BuildsContainer } from './bundles/common/components/Builds/index';
import { Footer } from './bundles/common/components/Footer';
import { ChampionDetailsContainer } from './bundles/common/components/Builds/ChampionDetails';
import { notFound } from '../src/bundles/common/components/404notfound';
import { Help } from '../src/bundles/common/components/Help';


const routing = (
    <Router>
        <nav className="sidebar">
                  <ul className="sidebar-nav">
                      <li className="sidebar-item">
                          <NavLink to="/" className="logo-link">
                              <img src={Ionia} className="ionia-logo"></img>
                          </NavLink>
                      </li>
                        <li className="sidebar-item">
                            <div className="sidebar-link">
                            <NavLink exact={true} activeClassName='is-active' to="/">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="home-heart" className="svg-inline--fa fa-home-heart fa-w-18" role="img" viewBox="0 0 576 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M64.11 311.38V496a16.05 16.05 0 0 0 16 16h416a16.05 16.05 0 0 0 16-16V311.38c-6.7-5.5-44.7-38.31-224-196.4-180.11 158.9-217.6 191.09-224 196.4zm314.1-26.31a60.6 60.6 0 0 1 4.5 89.11L298 459.77a13.94 13.94 0 0 1-19.8 0l-84.7-85.59a60.66 60.66 0 0 1 4.3-89.11c24-20 59.7-16.39 81.6 5.81l8.6 8.69 8.6-8.69c22.01-22.2 57.71-25.81 81.61-5.81z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M378.21 285.07c-23.9-20-59.6-16.39-81.6 5.81l-8.6 8.69-8.6-8.69c-21.9-22.2-57.6-25.81-81.6-5.81a60.66 60.66 0 0 0-4.3 89.11l84.7 85.59a13.94 13.94 0 0 0 19.8 0l84.7-85.59a60.6 60.6 0 0 0-4.5-89.11zm192.6-48.8l-58.7-51.79V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v51.7l-101.3-89.43a40 40 0 0 0-53.5 0l-256 226a16 16 0 0 0-1.2 22.61l21.4 23.8a16 16 0 0 0 22.6 1.2l229.4-202.2a16.12 16.12 0 0 1 21.2 0L528 284a16 16 0 0 0 22.6-1.21L572 259a16.11 16.11 0 0 0-1.19-22.73z"/></g></svg> */}
                                    <span className="link">home</span>
                            </NavLink>
                            </div>
                        </li>
                        <li className="sidebar-item">
                        <div className="sidebar-link">
                            <NavLink exact={true} activeClassName='is-active' to="/builds">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="books" className="svg-inline--fa fa-books fa-w-18" role="img" viewBox="0 0 576 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M96 0H32A32 32 0 0 0 0 32v64h128V32A32 32 0 0 0 96 0zM0 384h128V128H0zm0 96a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H0zm513.62-17.78L401.08 42.71l-60.26 16.14 112.35 418.8c.11.39.2.79.29 1.18l60.29-16.15c-.04-.15-.09-.3-.13-.46zM160 480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H160zM256 0h-64a32 32 0 0 0-32 32v64h124.79l-8-29.65a23.94 23.94 0 0 1 11.17-27V32A32 32 0 0 0 256 0zm-96 384h128V128H160z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M0 416h128v-32H0zm0-288h128V96H0zm575.17 317.65L460.39 17.78a23.89 23.89 0 0 0-29.18-17h-.09L415.73 5a24 24 0 0 0-16.9 29.36l114.79 427.86a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.35zM160 416h128v-32H160zM338.39 49.78a23.89 23.89 0 0 0-29.18-17h-.09L293.73 37a24 24 0 0 0-16.9 29.36l8 29.65H160v32h128V108l103.62 386.22a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.33z"/></g></svg> */}
                                <span className="link">builds</span>
                            </NavLink>
                        </div>
                        </li>
                        <li className="sidebar-item">
                            <div className="sidebar-link">
                                <NavLink activeClassName='is-active' to="/help">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="question-circle" className="svg-inline--fa fa-question-circle fa-w-16" role="img" viewBox="0 0 512 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 422a46 46 0 1 1 46-46 46.05 46.05 0 0 1-46 46zm40-131.33V300a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-4c0-41.06 31.13-57.47 54.65-70.66 20.17-11.31 32.54-19 32.54-34 0-19.82-25.27-33-45.7-33-27.19 0-39.44 13.14-57.3 35.79a12 12 0 0 1-16.67 2.13L148.82 170a12 12 0 0 1-2.71-16.26C173.4 113 208.16 90 262.66 90c56.34 0 116.53 44 116.53 102 0 77-83.19 78.21-83.19 106.67z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M256 338a46 46 0 1 0 46 46 46 46 0 0 0-46-46zm6.66-248c-54.5 0-89.26 23-116.55 63.76a12 12 0 0 0 2.71 16.24l34.7 26.31a12 12 0 0 0 16.67-2.13c17.86-22.65 30.11-35.79 57.3-35.79 20.43 0 45.7 13.14 45.7 33 0 15-12.37 22.66-32.54 34C247.13 238.53 216 254.94 216 296v4a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-1.33c0-28.46 83.19-29.67 83.19-106.67 0-58-60.19-102-116.53-102z"/></g></svg> */}
                                <span className="link">help</span>
                                </NavLink>
                            </div>
                        </li>
                  </ul>
              </nav>
          <div  id="container">
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/builds" exact component={BuildsContainer}></Route>
                <Route path="/builds/champions/:id" component={ChampionDetailsContainer}></Route>
                <Route path="/help" component={Help}></Route>
                <Route component={notFound} />
            </Switch>
          </div>
          <Footer /> 
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
