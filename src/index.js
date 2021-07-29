import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import data from './data.json';

function Property(props) {
  const style = {
    backgroundColor: props.data.agency.brandingColors.primary
  };

  return (
    <div className="property-card">
      <div className="agency" style={style}>
        <img src={props.data.agency.logo} alt=""/>
      </div>
      <div className="image">
        <img width="300px" src={props.data.mainImage} alt=""/>
      </div>
      <div className="price">{props.data.price}</div>
    </div>
  );
}

class App extends React.Component {
  render() {
    const results = data.results.map((property) => <Property key={property.id} data={property} />)
    const saved = data.saved.map((property) => <Property key={property.id} data={property} />)

    return (
      <div>
        <div className="row">
          <div className="column">
            <h1>Results</h1>
            {results}
          </div>
          <div className="column">
            <h1>Saved Properties</h1>
            {saved}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
