/** @format */

import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <button
                id={`square__${this.props.i}`}
                className={`square ${this.props.square}`}
                onClick={() => this.props.onClick()}
            >
                <span className='symbole'>{this.props.value}</span>
            </button>
        );
    }
}

export default Square;
