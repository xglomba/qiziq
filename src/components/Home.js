import React, {Fragment} from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
    <Fragment>
        <Helmet><title>QiziQ - Domovska stranka</title></Helmet>
        <div id="home">
            <section>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="#0066cc" stroke-width="4" fill="#0066cc" />
                    <text x="50%" y="58%" text-anchor="middle" font-size="30" font-family="sans-serif" fill="white">?</text>
                </svg>
                <div>
                    <h1>QiziQ</h1>
                    <div className="play-button-container">
                        <Link className="play-button" to="/play/instructions">Hraj</Link>
                        <Link className="ins-button" to="/play/instructions">Instrukcie</Link>
                    </div>
                </div>
            </section>
        </div>
    </Fragment>
);


export default Home;
