import React from 'react';
import { FirstComponent } from './FirstComponent';
import { SecondComponent } from './SecondComponent';
import { LifeCycle } from './LifeCycle';
import { FetchExample } from './FetchExample';

const App = () => {
  const [mainText, setMainText] = React.useState("main app");
  const [counterFlip, setCounterFlip] = React.useState(false);

  const handleMainChange = (value) => {
    setMainText(value);
  }

  const handleClick = () => {
    setCounterFlip(!counterFlip);
  }

  return (
    <div className="stack-my-components">

      <h1>{mainText}</h1>
      <FirstComponent placeholderText="here is my placeholder" onButtonPress={handleMainChange}></FirstComponent>
      <FirstComponent></FirstComponent>
      <SecondComponent>
        <p> text 1</p>
        <p> text 2</p>
        <FirstComponent placeholderText="inside the 2nd"></FirstComponent>
      </SecondComponent>
      <LifeCycle doCount={counterFlip}></LifeCycle>
      <button onClick={handleClick}>count</button>
      <FetchExample city={mainText}></FetchExample>
    </div>
  );
}

export { App };
