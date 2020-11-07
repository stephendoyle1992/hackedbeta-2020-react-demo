import React from 'react';

// You can get your own from https://openweathermap.org/
const apiKey = 'read above';

const FetchExample = (props) => {
  const [weatherData, setWeatherData] = React.useState("fetching data...");

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.city},CA&APPID=${apiKey}`
      );
      const jsonData = await response.json();
      setWeatherData(JSON.stringify(jsonData))
    }
    getData();
  }, [props.city]);

  return (
    <div className="fetch-output">
      {weatherData}
    </div>
  )
};

export { FetchExample };