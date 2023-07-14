import React from 'react';

const MyPar = (props) => {
    console.log('Paragraph Running.')
return (
    <div>
    <p>{props.children}</p>        
    </div>
    );
}

export default MyPar;