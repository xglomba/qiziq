import React, {Fragment} from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
    <Fragment>
        <Helmet><title>QiziQ - Domovska stranka</title></Helmet>
        <div id="home">
            <section>
                <div>
                    <h2>QiziQ</h2>
                    <div className="play-button-container">
                        <ul>
                            <li> <Link to="/play/instructions">Play</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </Fragment>
);


export default Home;
