import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './components/Home';
import QuizInstructions from "./components/actualQuiz/quizInstructions";
import Play from "./components/actualQuiz/play";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact > </Route>
                <Route path="/instructions" element={<QuizInstructions />} exact > </Route>
                <Route path="/play" element={<Play />} exact > </Route>
            </Routes>
        </Router>
    );
}

export default App;
