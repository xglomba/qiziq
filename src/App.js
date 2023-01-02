import React from "react";
import {withRouter, BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './components/Home';
import QuizInstructions from "./components/actualQuiz/quizInstructions";
import Play from "./components/actualQuiz/play";


function App() {
    return (
        //<TransitionGroup>
         //   <CSSTransition
            //key={ location.key }
         //   timeout={500}
         //   classname="fade"
        //    >
        <BrowserRouter>


                    <Routes>

                            <Route path="/" element={<Home />} exact > </Route>
                            <Route path="/instructions" element={<QuizInstructions />} exact > </Route>
                            <Route path="/play" element={<Play />} exact > </Route>

                    </Routes>


        </BrowserRouter>
         //   </CSSTransition>
    //    </TransitionGroup>
    );
}

export default App;
