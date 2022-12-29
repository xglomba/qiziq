import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "../Home";

const QuizInstructions = () => (
    //<h1>Instrukcie</h1>
    <Fragment>
        <Helmet>
            <title>QiziQ - Inštrukcie</title>
        </Helmet>
        <div className="instructions container">
            <h1>Ako sa to hrá?</h1>
            <p>Dopln Adko pls</p>
            <ul>
                <li>

                </li>
            </ul>
        </div>
    </Fragment>
);

export default QuizInstructions;

/** TODO
 *  Adko doplni vsekty ionstrukcie. vsak? vsak?
 *  classy a IDcka:
 *  <ul className="browser-default" id="main-list
 */