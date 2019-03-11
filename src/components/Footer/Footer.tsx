import * as React from 'react';
import './Footer.scss';

export interface IFooterProps {}

/**
 * Footer component.
 *
 * @author Daniel Zawadzki <hello@danielzawadzki.com>
 * @version 1.0.0
 */
const Footer: React.FunctionComponent<IFooterProps> = ({}) => (
    <footer className="Footer">
        Project <a href="https://github.com/danzawadzki/react-tooltip" target="_blank">GitHub</a> repository.
    </footer>
);

export default Footer;