import { useState } from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';

export interface Property {
  price: string,
  agency: {
    brandingColors: {
      primary: string
    },
    logo: string
  },
  id: string,
  mainImage: string
}

interface ResponseData {
  results: Array<Property>,
  saved: Array<Property>
}

interface Props {
  data: ResponseData
}

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

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PropertyDashboard = (props: Props) => {
  const [saved, setSaved] = useState(props.data.saved.slice())

  const save = (property: Property) => {
    // Check if the property has already been saved
    if (saved.find(item => item.id === property.id)) {
      return;
    } else {
      setSaved([...saved, property]);
    }
  };

  const unsave = (id: string) => {
    setSaved(saved.filter(item => item.id !== id))
  };

  const renderPropertyCard = (property: Property, isSaved: boolean) => {
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
    <Row>
      <Column>
        <h1 id="results-heading">Results</h1>
        <List aria-labelledby="results-heading">
          {resultsCards}
        </List>
      </Column>
      <Column>
        <h1 id="saved-heading">Saved Properties</h1>
        <List aria-labelledby="saved-heading">
          {savedCards}
        </List>
      </Column>
    </Row>
  );
};

export default PropertyDashboard;
