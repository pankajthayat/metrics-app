import React from 'react';


const style={ overflow: 'auto', border: '2px solid black', height: '600px'}
const Scroll = (props) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default Scroll;