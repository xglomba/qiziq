import React, { useContext, Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import M from 'materialize-css';
import { useLocation } from "react-router-dom";


import questions from '../../questions.json';
import correctASound from '../../assets/sounds/suc.mp3';
import incorrectASound from '../../assets/sounds/fail.mp3';
import click from '../../assets/sounds/click.mp3';

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
            numOfQ: 0,
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
            const answer = currentQ.answer;

            this.setState({
                currentQ: currentQ,
                nextQ: nextQ,
                prevQ: prevQ,
                numOfQ: questions.length,
                answer: answer,
                currQIndex: currQIndex
            });
        }
    };

    incrementCounter = () => {
        this.setState({
            counter: 11
        });
    };

    handleOptionClick = (event) => {
        //console.log('click');
        //alert();
        // M.toast({
        //    html: 'vybral si'
        //});
        console.log(event.target.innerHTML, this.state.answer)
        //document.getElementById("correctS").play();
        if (event.target.innerHTML === this.state.answer) {
            setTimeout(() => {
                document.getElementById("correctS").play();
            }, 200);
            this.correctAnswer();

        } else {
            setTimeout(() => {
                document.getElementById("incorrectS").play();
            }, 200);
            this.wrongAnswer();

        }
    };

    handleNextButtonClick = () => {
        let rr = this.state;
        this.playButton();

        if (rr.nextQ !== undefined) {
            //console.log(rr.currQIndex, prev + increment);
            this.setState(prevState => ({
                currQIndex: prevState.currQIndex + increment

            }), () => {
                this.displayQuestion(rr.state , rr.currentQ, rr.nextQ, rr.prevQ)
            });

        }
    };

    handlePrevButtonClick = () => {
        let rr = this.state;
        this.playButton();

        if (rr.prevQ !== undefined) {
            //console.log(rr.currQIndex, prev + increment);
            this.setState(prevState => ({
                currQIndex: prevState.currQIndex - increment

            }), () => {
                this.displayQuestion(rr.state , rr.currentQ, rr.nextQ, rr.prevQ)
            });

        }
    };

    handleQuitButtonClick = () => {
        //let rr = this.state;
        this.playButton();
        const location = useLocation();
        //const history = useHistory();

        //this.props.history('/');
        if (window.confirm("Naozaj chces zahodit pokus?")) {
            //history.push("/");
            //history.push("www.google.com");
        }
    };

    handleButtonClick = (event) => {

        switch (event.target.id) {
            case "next-button":
                this.handleNextButtonClick();
                console.log("hehe");
                break;
            case "prev-button":
                this.handlePrevButtonClick();
                console.log("hehe back");
                break;
            case "quit-button":
                this.handleQuitButtonClick();
                console.log("hehe back 3");
                break;
            default:
                console.log("click err")
                break;
        }
        this.playButton()
    };

    playButton = () => {
        setTimeout(() => {
            document.getElementById("click").play();
        }, 1);
    };

    correctAnswer = (event) => {
        navigator.vibrate(500);
        M.toast({
            html: 'Spravne!',
            classes: 'toast-valid',
            displayLength: 1500
        });
        this.setState(prevState => ({
            score: prevState.score + increment,
            currectA: prevState.currectA + increment,
            currQIndex: prevState.currQIndex + increment,
            numOfQAnswered: prevState.numOfQAnswered + increment
        }), () => { //callback funkcia na novy stav, velmi uzitocne
            this.displayQuestion(this.state.questions, this.state.currentQ, this.state.nextQ, this.state.prevQ)
        });
    }

    wrongAnswer = (event) => {
        navigator.vibrate(1250);
        M.toast({
            html: 'Nespravne!',
            classes: 'toast-invalid',
            displayLength: 1500
        });
        this.setState(prevState => ({
            wrongA: prevState.wrongA + increment,
            currQIndex: prevState.currQIndex + increment,
            numOfQAnswered: prevState.numOfQAnswered + increment
        }), () => {
            this.displayQuestion(this.state.questions, this.state.currentQ, this.state.nextQ, this.state.prevQ)
        });
    }

    render() {
        //console.log(questions)

        const { currentQ, currQIndex } = this.state;

        return (
            <Fragment>
                <Helmet>
                    <title>QiziQ</title>
                </Helmet>
                <Fragment>
                    <audio id="correctS" src= { correctASound }></audio>
                    <audio id="incorrectS" src= { incorrectASound }></audio>
                    <audio id="click"  src= { click }></audio>
                </Fragment>
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
                            <span className="left" style={{ float:'left' }}> { currQIndex + increment } / { this.state.numOfQ } </span>
                            <span className="right"><span className="lifeline">2:14</span><span className="mdi mdi-clock-outline mdi-24px"></span></span>
                        </p>
                    </div>
                    <h5>{ currentQ.question }</h5>
                    <div className="options-container">
                        <p onClick={ this.handleOptionClick } className="option">{ currentQ.optionA }</p>
                        <p onClick={ this.handleOptionClick } className="option">{ currentQ.optionB }</p>
                    </div>
                    <div className="options-container">
                        <p onClick={ this.handleOptionClick } className="option">{ currentQ.optionC }</p>
                        <p onClick={ this.handleOptionClick } className="option">{ currentQ.optionD }</p>
                    </div>
                    <div className="button-container">
                        <button id="prev-button" onClick={ this.handleButtonClick }>Predchadzajuca</button>
                        <button id="next-button" onClick={ this.handleButtonClick }>Nasledujuca</button>
                        <button id="quit-button" onClick={ this.handleButtonClick }>Vzdavam sa!</button>
                    </div>

                </div>

            </Fragment>
        );
    }
}

export default Play;