import React from 'react';
import Property from './Property';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.data.results.slice(),
      saved: props.data.saved.slice()
    };
  }

  saveProperty(property) {
    // Check if the property has already been saved
    if (this.state.saved.find(item => item.id === property.id)) {
      return;
    }

    this.setState(state => ({
      saved: state.saved.concat([property])
    }));
  }

  unsaveProperty(id) {
    this.setState(state => ({
      saved: state.saved.filter(item => item.id !== id)
    }));
  }

  renderProperty(property, saved) {
    return (
      <Property
        key={property.id}
        saved={saved}
        onButtonClick={() => saved ? this.unsaveProperty(property.id) : this.saveProperty(property)}
        data={property}
      />
    );
  }

  render() {
    const results = this.state.results.map((property) => this.renderProperty(property, false));
    const saved = this.state.saved.map((property) => this.renderProperty(property, true));

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

export default App;
