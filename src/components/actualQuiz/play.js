import React from "react";

class Play extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            counter: 0
        };
    }

    incrementCounter = () => {
        this.setState({
            counter: 11
        });
    };
    render() {
        return (
            <div>
                <p>Hraci komponent</p>
                <p>Pocidlo: { this.state.counter }</p>
                <button onClick={ this.incrementCounter }>Klik</button>
            </div>
        );
    }
}

export default Play;