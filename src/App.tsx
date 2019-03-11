import React from 'react';
import './App.css';
import Tooltip from "./components/Tooltip/Tooltip";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export interface IAppProps {}

/**
 * App component.
 *
 * @author Daniel Zawadzki <hello@danielzawadzki.com>
 * @version 1.0.0
 */
const App: React.FunctionComponent<IAppProps> = ({}) => (
    <div className="App">
        <Header/>

        {/* Tooltip 1 */}
        <p>
            <Tooltip message="Howdy-ho, I'm an example tooltip 🤗!" position="top" key="tooltip-1">
                Tooltip above
            </Tooltip>
        </p>

        {/* Tooltip 2 */}
        <p>
            <Tooltip message="Howdy-ho, I'm an example tooltip 🤗!" position="bottom" key="tooltip-2">
                Tooltip under
            </Tooltip>
        </p>

        {/* Tooltip 3 */}
        <p>
            <Tooltip message="Howdy-ho, I'm an example tooltip 🤗!" position="right" key="tooltip-3">
                Tooltip on right
            </Tooltip>
        </p>

        {/* Tooltip 4 */}
        <p>
            <Tooltip message="Howdy-ho, I'm an example tooltip 🤗!" position="left" key="tooltip-4">
                Tooltip on left
            </Tooltip>
        </p>

        <Footer/>
    </div>
);


export default App;
