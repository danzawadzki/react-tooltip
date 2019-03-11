import * as React from 'react';
import './Header.scss';

export interface IHeaderProps {}

/**
 * Header component.
 *
 * @author Daniel Zawadzki <hello@danielzawadzki.com>
 * @version 1.0.0
 */
const Header: React.FunctionComponent<IHeaderProps> = ({}) => (
    <header className="Header">
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/label_1f3f7.png"
             alt="React-tooltip logo" className="Header__logo"/>
        <h1 className="Header__title">React-tooltip component</h1>
        <h4 className="Header__subtitle">A tooltip component created using React hooks and ref 🔖.</h4>
    </header>
);

export default Header;