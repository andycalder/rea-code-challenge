import React from 'react';
import ReactDOM from 'react-dom';

import data from './data.json';

console.log(data);

class App extends React.Component {
  render() {
    return <h1>Results</h1>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
