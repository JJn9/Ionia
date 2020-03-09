import React from 'react';
import Ionia from '../../../assets/images/Ionia.png';
import './Header.scss'
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="sidebar">
                <ul className="sidebar-nav">
                    <li className="logo">
                        <a href="#" className="sidebar-link">
                        <img src={Ionia} className="ionia-logo"></img>
                        </a>
                    </li>
                    <OverlayTrigger placement='right' overlay={<Tooltip id="tooltip-right">Summoner profile</Tooltip>}>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" viewBox="0 0 448 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M352 128A128 128 0 1 1 224 0a128 128 0 0 1 128 128z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M313.6 288h-16.7a174.1 174.1 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6A134.43 134.43 0 0 0 313.6 288z"/></g></svg>
                            </a>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger placement='right' overlay={<Tooltip id="tooltip-right">Builds</Tooltip>}>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="books" className="svg-inline--fa fa-books fa-w-18" role="img" viewBox="0 0 576 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M96 0H32A32 32 0 0 0 0 32v64h128V32A32 32 0 0 0 96 0zM0 384h128V128H0zm0 96a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H0zm513.62-17.78L401.08 42.71l-60.26 16.14 112.35 418.8c.11.39.2.79.29 1.18l60.29-16.15c-.04-.15-.09-.3-.13-.46zM160 480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H160zM256 0h-64a32 32 0 0 0-32 32v64h124.79l-8-29.65a23.94 23.94 0 0 1 11.17-27V32A32 32 0 0 0 256 0zm-96 384h128V128H160z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M0 416h128v-32H0zm0-288h128V96H0zm575.17 317.65L460.39 17.78a23.89 23.89 0 0 0-29.18-17h-.09L415.73 5a24 24 0 0 0-16.9 29.36l114.79 427.86a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.35zM160 416h128v-32H160zM338.39 49.78a23.89 23.89 0 0 0-29.18-17h-.09L293.73 37a24 24 0 0 0-16.9 29.36l8 29.65H160v32h128V108l103.62 386.22a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.33z"/></g></svg>
                            </a>
                        </li>
                    </OverlayTrigger>
                </ul>
            </nav>
        )
    }
}