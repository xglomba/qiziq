import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './components/Home';
import QuizInstructions from "./components/actualQuiz/quizInstructions";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact > </Route>
                <Route path="/play/instructions" element={<QuizInstructions />} exact > </Route>
            </Routes>
        </Router>
    );
}

export default App;
