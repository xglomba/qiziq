import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";


class Play extends Component {

    constructor (props) {
        super(props);
    }

    incrementCounter = () => {
        this.setState({
            counter: 11
        });
    };
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>QiziQ</title>
                </Helmet>
                <div className="question">
                    <div className="lifeline-container">
                        <p>
                            <span className="mdi mdi-set-center mdi-24px mdi-lightbulb-fluorescent-tube-outline"></span>2
                        </p>
                        <p>
                            <span className="mdi mdi-lightbulb-on-outline mdi-24px mdi-lightbulb-fluorescent-tube-outline"></span>5
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>1/15</span>
                            21:14<span className="mdi mdi-clock-outline mdi-24px">1/5</span>
                        </p>
                    </div>
                    <h5>Kto je najkrajsi na svete?</h5>
                    <div className="options-container">
                        <p className="option">ja</p>
                        <p className="option">ty</p>
                    </div>
                    <div className="options-container">
                        <p className="option">on</p>
                        <p className="option">ona</p>
                    </div>
                    <div className="button-container">
                        <button>Predchadzajuca</button>
                        <button>Nasledujuca</button>
                        <button>Vzdavam sa!</button>
                    </div>

                </div>

            </Fragment>
        );
    }
}

export default Play;