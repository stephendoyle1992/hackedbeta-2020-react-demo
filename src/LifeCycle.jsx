import React from 'react';

const LifeCycle = (props) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setCounter(counter + 1);
  }, [props.doCount]);

  return (
    <div className="obvious-counter-class">
      {counter}
    </div>
  )

};

export { LifeCycle }