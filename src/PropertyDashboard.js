import { useState } from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const PropertyDashboard = (props) => {
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
      <Row>
        <Column>
          <h1>Results</h1>
          {resultsCards}
        </Column>
        <Column>
          <h1>Saved Properties</h1>
          {savedCards}
        </Column>
      </Row>
    </>
  );
};

export default PropertyDashboard;
