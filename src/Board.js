/** @format */

import React, { Component, Fragment } from 'react';
import Square from './Square';
import Winner from './Winner';
import Help from './help';
function checkDraw(squares) {
    let countNull = 9;

    squares.forEach((squareValue) => {
        if (squareValue !== null) {
            countNull -= 1;
        }
    });
    // console.log(countNull);
    return countNull === 0 ? 'draw' : null;
}
function decideWinner(squares) {
    let status = null;

    const areas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < areas.length; i++) {
        const [a, b, c] = areas[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            status = squares[a];
        }
    }
    if (status === null) {
        const isDraw = checkDraw(squares);
        status = isDraw !== null ? 'draw' : status;
    }
    return status;
}

const intialState = {
    squares: Array(9).fill(null),
    isNextX: true,
    showWinner: false,
    winnerName: '',
    showHelp: false,
};

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = intialState;
        this.handleShowWinner = this.handleShowWinner.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
        this.handleShowHelp = this.handleShowHelp.bind(this);
    }
    reset() {
        this.setState(intialState);
    }
    handleShowWinner() {
        this.setState(intialState);
    }
    handleShowHelp() {
        this.setState((prevState) => ({ ...prevState, showHelp: !prevState.showHelp }));
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (decideWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isNextX ? 'X' : 'O';
        this.setState({ squares: squares, isNextX: !this.state.isNextX });
    }
    renderSquare(i) {
        return (
            <Square
                i={i}
                square={this.state.isNextX ? 'squareX' : 'squareO'}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    render() {
        const winner = decideWinner(this.state.squares);
        let status;
        // console.log('from render -> winner', winner);
        if (winner) {
            status =
                winner === 'draw'
                    ? 'The Game End with Draw'
                    : 'Congratulation To Winner  Mr/s. ' + winner;
        } else {
            status = 'Current player: ' + (this.state.isNextX ? 'X' : 'O');
        }

        return (
            <Fragment>
                {winner && (
                    <Winner
                        status={status}
                        display={!this.state.showWinner ? 'block' : 'none'}
                        showWinner={this.handleShowWinner}
                    />
                )}
                <Help
                    display={this.state.showHelp ? 'block' : 'none'}
                    handleShowHelp={this.handleShowHelp}
                />
                <div className='status'>{status}</div>
                <div className='button'>
                    <button onClick={this.reset}> Reset </button>
                    <button onClick={this.handleShowHelp}> Help </button>
                </div>
                <div className='container'>
                    <div className='board__row'>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className='board__row'>
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className='board__row'>
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Board;
