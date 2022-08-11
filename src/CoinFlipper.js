import React, { Component } from 'react';
import Coin from './Coin.js';
import './CoinFlipper.css';

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.flipCoin = this.flipCoin.bind(this);
        this.state = { side: null, numFlips: 0, numHeads: 0, numTails: 0 };
    }
    flipCoin() {
        const sides = ['heads', 'tails'];
        let face = sides[Math.floor(Math.random() * sides.length)];
        this.setState((curState) => {
            return { side: face,
                     numFlips: curState.numFlips + 1,
                     numHeads: face === 'heads' ? curState.numHeads + 1 : curState.numHeads,
                     numTails: face === 'tails' ? curState.numTails + 1 : curState.numTails};
        });
    }
    render() {
        return (
            <div className="CoinFlipper">
                <h1>Let's Flip a Coin!</h1>
                <Coin side={this.state.side} />
                <button onClick={this.flipCoin}>FLIP MEEEE</button>
                <p>{`Out of ${this.state.numFlips} flips, there have been ${this.state.numHeads} heads, and ${this.state.numTails} tails.`}</p>
            </div>  
        );
    }
}

export default CoinFlipper;