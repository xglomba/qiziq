import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "../Home";
import '../../styles/style.scss';

function Listok() {
    console.log("Ahoj debris");
}
const QuizInstructions = () => (
    //<h1>Instrukcie</h1>
    <Fragment>
        <Helmet>
            <title>QiziQ - Inštrukcie</title>
        </Helmet>
        <div id="home">
            <section>
                <h1>Inštruktáž k hre</h1>
                <p> Názov QiziQ môže byť už pre naše nadčasové mozgy mätúci, preto treba hneď uviesť, že sa jedná o klasický "kvíz".
                    Cieľom bude správne odpovedať na čo možno najviac otázok. Okruh otázok je bližšie nešpecifikovaný, no asi najvýstižnejšie sa dá zaradiť ako 'Všeobecné vedomosti'.
                    Väčšinu otázok som čerpal od mojej bývalej učiteľmi z materskej skôlky, ide teda o vedomosti, ktoré tlačia do hláv už 4 ročným deťom. Snáď som týmto nikoho neodradil
                    od vyskúšania našeho kvízu.<br/>
                </p>
                <ul>
                    <li><span>○</span> Pri každej otázke bude vždy len 1 správna odpoveď.</li>
                    <li><span>○</span>  Sledujte si časomieru v pravej časti obrazovky.</li>
                    <li><span>○</span>  Otázkami sa je možné sa preklikávať dopredu a dozadu, nie je teda nutné odpovedať hneď ale dá sa k otázke spätne vrátiť.</li>
                </ul>
                <div className="play-button-container">
                    <Link className="play-button" to="/">Späť</Link>
                </div>
            </section>
        </div>
    </Fragment>
);


export default QuizInstructions;

/** TODO
 *  Adko doplni vsekty ionstrukcie. vsak? vsak?
 *  classy a IDcka:
 *  <ul className="browser-default" id="main-list
 */