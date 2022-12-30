import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import questions from '../../questions.json'

var increment = 1;

function isEmpty(strIn)
{
    if (strIn === undefined)
    {
        return true;
    }
    else if(strIn == null)
    {
        return true;
    }
    else return strIn === "";
}

const isEmpty2 = (value) =>
    value === undefined || value == null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0);

class Play extends Component {

    constructor (props) {
        super(props);

        this.state = {
            questions: questions,
            currentQ:{},
            nextQ: {},
            prevQ:{},
            answer:'',
            numbOfQ: 0,
            numOfQAnswered: 0,
            currQIndex: 0,
            score: 0,
            currectA: 0,
            wrongA: 0,
            hints: 5,
            fiftySixty: 2,
            usedFiftySixty: false,
            time: {}
        };

    }

    componentDidMount() {
        const { state } = this;
        this.displayQuestion(state.questions, state.currentQ, state.nextQ, state.prevQ)
    }

    displayQuestion = (questions = this.state.questions, currentQ, nextQ, prevQ) => {
        let { currQIndex } = this.state;

        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQ = questions[currQIndex];
            nextQ = questions[currQIndex + increment];
            prevQ = questions[currQIndex - increment];
            const answer = currQIndex.answer;

            this.setState({
                currentQ: currentQ,
                nextQ: nextQ,
                prevQ: prevQ,
                answer: answer
            });
        }
    };

    incrementCounter = () => {
        this.setState({
            counter: 11
        });
    };
    render() {
        //console.log(questions)

        const { currentQ } = this.state;

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
                    <h5>{ currentQ.question }</h5>
                    <div className="options-container">
                        <p className="option">{ currentQ.optionA }</p>
                        <p className="option">{ currentQ.optionB }</p>
                    </div>
                    <div className="options-container">
                        <p className="option">{ currentQ.optionC }</p>
                        <p className="option">{ currentQ.optionD }</p>
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