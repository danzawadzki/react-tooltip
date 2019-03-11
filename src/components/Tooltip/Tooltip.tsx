import * as React from 'react';
import './Tooltip.scss';
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';
import {useRef} from 'react';

export interface ITooltip {
    /** Tooltip position. */
    position?: 'top' | 'left' | 'right' | 'bottom';
    /** Tooltip message content. */
    message: String;
    /** Array with details about columns to render. */
    children: JSX.Element | Array<JSX.Element> | string;
}

export interface ITooltipStyle {
    /** Distance to the left edge. */
    left?: string;
    /** Distance to the top edge. */
    top?: string;
    /** Distance to the bottom edge. */
    bottom?: string;
    /** Distance to the right edge. */
    right?: string;
}

/**
 * Tooltip component.
 *
 * @author Daniel Zawadzki <hello@danielzawadzki.com>
 * @version 1.0.0
 */
const Tooltip: React.FunctionComponent<ITooltip> = ({position = 'top', message, children}) => {
    /**
     * Hook toggling tooltip isVisible flag.
     */
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const toggle = () => setIsVisible(!isVisible);

    /**
     * Reference to the component to track width and height
     */
    const node = useRef<any>(null);

    /**
     * Positioning the component using the reference
     */
    let style: ITooltipStyle = {};
    if (node.current && node.current.offsetWidth) {
        if (position === 'top' || position === 'bottom') {
            style.left = `${String(node.current.offsetWidth / 2)}px`;
        } else {
            style.top = `-${String(node.current.offsetHeight / 1.5)}px`;
        }
    }

    return (
        <div className="Tooltip">
            <div
                className="Tooltip__toggler"
                onMouseOverCapture={toggle}
                onMouseOut={toggle}
                ref={node}>
                {children}
            </div>
            <CSSTransition
                in={isVisible}
                timeout={200}
                classNames="Tooltip"
                unmountOnExit>
                <div
                    className={`Tooltip__message Tooltip__message--${position}`}
                    style={style}>
                    {message}
                </div>
            </CSSTransition>
        </div>
    );
};

export default Tooltip;
