import { useState } from 'react';
import PropertyCard from './PropertyCard';
import './index.css';

function PropertyDashboard(props) {
  const [saved, setSaved] = useState(props.data.saved.slice())

  const save = (property) => {
    // Check if the property has already been saved
    if (saved.find(item => item.id === property.id)) {
      return;
    } else {
      setSaved([...saved, property]);
    }
  };

  const unsave = (id) => {
    setSaved(saved.filter(item => item.id !== id))
  };

  const renderPropertyCard = (property, isSaved) => {
    return (
      <PropertyCard
        key={property.id}
        isSaved={isSaved}
        onButtonClick={() => isSaved ? unsave(property.id) : save(property)}
        data={property}
      />
    );
  };

  const resultsCards = props.data.results.map(property => renderPropertyCard(property, false));
  const savedCards = saved.map(property => renderPropertyCard(property, true));

  return (
    <>
      <div className="row">
        <div className="column">
          <h1>Results</h1>
          {resultsCards}
        </div>
        <div className="column">
          <h1>Saved Properties</h1>
          {savedCards}
        </div>
      </div>
    </>
  );
}

export default PropertyDashboard;
