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
                    <h2>Uhadni ma!</h2>
                    <div className="lifeline-container">
                        <p>
                            <span className="mdi mdi-set-center mdi-24px mdi-lightbulb-fluorescent-tube-outline"></span><span className="lifeline">3</span>
                        </p>
                        <p>
                            <span className="mdi mdi-lightbulb-on-outline mdi-24px mdi-lightbulb-fluorescent-tube-outline"></span><span className="lifeline">5</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="left">1/15</span>
                            <span className="right"><span className="lifeline">2:14</span><span className="mdi mdi-clock-outline mdi-24px"></span></span>
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