import React from 'react';
import MyPar from './MyPar';

const DemoOutput = (props) => {
    console.log('Output Running.')
    return (
        <MyPar>
            {props.show ? 'New Card Text.' : ''}
        </MyPar>
    );
}

export default React.memo(DemoOutput);