import React, { useContext, Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import M from 'materialize-css';
import {createBrowserRouter, Link, useNavigate, withRouter} from "react-router-dom";
import { Draggable, Droppable } from 'react-drag-and-drop';

import questions from '../../questions.json';
import correctASound from '../../assets/sounds/suc.mp3';
import incorrectASound from '../../assets/sounds/fail.mp3';
import click from '../../assets/sounds/click.mp3';

let increment = 1;
//let navigate = useNavigate();

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
            time: {},
            prevRandomNumber: []
        };
        this.interval = null;

    }
     GoHome = () => {
        //let navigate = useNavigate()
        //navigate("/");
        console.log("haha");
    }

    componentDidMount() {
        const { state } = this;
        this.displayQuestion(state.questions, state.currentQ, state.nextQ, state.prevQ);
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
                currQIndex: currQIndex,
                prevRandomNumber: []
            }, () => {
                this.showOptions();
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

    HandleQuitButtonClick = () => {
        //let rr = this.state;
        this.playButton();
        const navigate = useNavigate();

        /*this.props.history('/');
        if (window.confirm("Naozaj chces zahodit pokus?")) {
            //history.push("/");
            M.toast({html: 'Domov!'})
            navigate('/')
            //this.props.history.push("/"); // ??????
        }*/
        function handle() {
            //event.preventDefault();
            //let navigate = useNavigate();
            //navigate('/');
          //  GoHome();
        }

        console.log("hehe back")
        handle();
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
                this.HandleQuitButtonClick();
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
            if (this.state.nextQ === undefined) {
                this.endGame();
            } else {
                this.displayQuestion(this.state.questions, this.state.currentQ, this.state.nextQ, this.state.prevQ);
            }
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
            if (this.state.nextQ === undefined) {
                this.endGame();
            } else {
                this.displayQuestion(this.state.questions, this.state.currentQ, this.state.nextQ, this.state.prevQ);
            }
        });
    }

    handleDrop = () => {
        console.log("dropppp"); // 'bar'
        //this.state.hints = this.state.hints - increment;

        if (this.state.hints > 0 || this.state.hints !== 0) {
            const options = Array.from(document.querySelectorAll(".option"));
            //console.log(options);

            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });

            while (true) {
                const random = Math.round(Math.random() * 3);

                if (random !== indexOfAnswer && !this.state.prevRandomNumber.includes(random)) {
                    options.forEach((option, index) => {
                        if (index === random) {
                            option.style.backgroundColor = "red";
                            this.setState((prevState) => ({
                                hints: prevState.hints - increment,
                                prevRandomNumber: prevState.prevRandomNumber.concat(random)
                            }));
                        }
                    });
                    break; //wow
                }
                if (this.state.prevRandomNumber.length >= 3) {
                    break;
                }
            }
        }


        //document.getElementById("correctS").play();
        //this.handleDrop();
        //console.log(event.target.innerHTML);
    }

    fiftyDrop = () => {
        console.log("asd");


        if (this.state.fiftySixty > 0 || this.state.fiftySixty !== 0) {
            const options = Array.from(document.querySelectorAll(".option"));
            //console.log(options);

            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });


            while (true) {
                const random = Math.round(Math.random() * 3);

                if (random === indexOfAnswer && !this.state.prevRandomNumber.includes(random)) {
                    options.forEach((option, index) => {
                        if (index === random) {
                            option.style.backgroundColor = "green";
                            this.setState((prevState) => ({
                                fiftySixty: prevState.fiftySixty - increment,
                                prevRandomNumber: prevState.prevRandomNumber.concat(random)
                            }));
                        }
                    });
                    break; //wow
                }
                if (this.state.prevRandomNumber.length >= 3) {
                    break;
                }
            }

        }
    }

    showOptions = () => {
        const options = Array.from(document.querySelectorAll(".option"));

        options.forEach((option, index) => {
            option.style.backgroundColor = "dodgerblue";
        });
    }

    startTimer = () => {
        const timeAll = Date.now() + 180000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = timeAll - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / ( 1000));

            if (distance < 0) {
                M.toast({
                    html: "Vyprsal ti cas!",
                    classes: 'toast-invalid',
                    displayLength: 1500
                });
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    alert("Vyprsal ti cas!");
                    this.endGame();
                });
            } else {
                this.setState({
                   time: {
                       minutes,
                       seconds
                   }
                });
            }
        }, 1000)
    }

    endGame = () => {
        alert("Dokoncil si Quiz!");
        M.toast({
            html: 'Dokoncil si quiz!!',
            classes: 'toast-valid',
            displayLength: 1500
        });

        //const state = this;
        const playerStat = {
            score: this.state.score,
            numOfQ: this.state.numOfQ,
            numOfQAnswered: this.state.numOfQAnswered,
            currectA: this.state.currectA,
            wrongA: this.state.wrongA,
            hints: 5 - this.state.hints,
            fiftySixtyUsed: 2 - this.state.fiftySixty

        };

        console.log(playerStat);
        setTimeout(() => {
            this.props.history.push("/"); // preco to nic nevracia neviem
        }, 1000);
    }

    render() {
        //console.log(questions)

        const { currentQ, currQIndex, hints, fiftySixty, time } = this.state;

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
                            <span className="mdi mdi-set-center mdi-24px mdi-lightbulb-fluorescent-tube-outline"></span>
                            <span className="lifeline"> { fiftySixty }</span>
                        </p>
                        <p>
                            <span className="mdi mdi-lightbulb-on-outline mdi-24px mdi-lightbulb-fluorescent-tube-outline"></span>
                            <span className="lifeline">{ hints }</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="left" style={{ float:'left' }}> { currQIndex + increment } / { this.state.numOfQ } </span>
                            <span className="right"><span className="lifeline">{ time.minutes }:{ time.seconds }</span><span className="mdi mdi-clock-outline mdi-24px"></span></span>
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
                        <Link to="/summary">Sumar</Link>
                    </div>
                    <div>
                        <Draggable type="foo" data="bar">
                            <span className="mdi mdi-account-supervisor-outline mdi-24px"></span><span className="lifeline"></span>
                        </Draggable>

                        <Droppable types={['foo']} onDrop={ this.handleDrop }>
                            <div>Potiahni panáčika sem pre pomocku</div>
                        </Droppable>
                        <Droppable types={['foo']} onDrop={ this.fiftyDrop }>
                            <div>Potiahni panáčika sem pre riesenie</div>
                        </Droppable>
                    </div>
                </div>


            </Fragment>
        );
    }
}

export default Play;