/** @format */

import React, { Fragment } from 'react';

const Winner = (props) => {
    console.log(props);
    return (
        <Fragment>
            {/* <!-- The Modal --> */}
            <div id='myModal' className='modal' style={{ display: props.display }}>
                {/* <!-- Modal content --> */}
                <div className='modal-content'>
                    <span className='close' onClick={props.showWinner}>
                        &times;
                    </span>
                    <h1>
                        <span role='img' aria-label='congratulation' style={{ fontSize: '100px' }}>
                            &#127870;
                        </span>
                        <span role='img' aria-label='congratulation' style={{ fontSize: '100px' }}>
                            &#127881;
                        </span>
                        <span role='img' aria-label='congratulation' style={{ fontSize: '100px' }}>
                            &#127882;
                        </span>
                    </h1>
                    <h1> {props.status} </h1>
                </div>
            </div>
        </Fragment>
    );
};

export default Winner;
