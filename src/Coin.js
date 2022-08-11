import React, { Component } from 'react';
import './Coin.css';

const headsSrc = "/dime_heads.png";
const tailsSrc = "/dime_tails.png";

class Coin extends Component {
    render() {
        if (this.props.side === null) {
            return <div></div>
        } else {
            return (
                <img src={this.props.side === 'heads' ? headsSrc : tailsSrc } className={"Coin"} />
            );
        }
    }
}

export default Coin;