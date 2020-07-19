/** @format */

import React, { Component, Fragment } from 'react';
import Board from './Board';
class Game extends Component {
    render() {
        return (
            <Fragment>
                <h1>TicTacToe</h1>
                <Board />;
            </Fragment>
        );
    }
}

export default Game;
