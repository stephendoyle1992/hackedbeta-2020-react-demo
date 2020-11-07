import React from 'react';

const SecondComponent = (props) => {
  return (
    <div className="obvious-second-component-class">
      {props.children}
    </div>
  )
}

export {SecondComponent};