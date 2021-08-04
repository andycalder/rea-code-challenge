import { useState } from 'react';
import styled from 'styled-components';
import { Property } from './PropertyDashboard';

interface Props {
  data: Property,
  isSaved: boolean,
  onButtonClick: () => void
}

const Card = styled.li`
  background: lightgray;
  margin: 0.5em;
`;

const AgencyBanner = styled.div`
  width: 100%;
  background: ${props => props.color};
`;

const PropertyCard = (props: Props) => {
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <Card
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
    >
      <AgencyBanner color={props.data.agency.brandingColors.primary}>
        <img src={props.data.agency.logo} alt="Agency"/>
      </AgencyBanner>
      <img width="300px" src={props.data.mainImage} alt="Property"/>
      <div className="price">{props.data.price}</div>
      {buttonVisible && (<button onClick={() => props.onButtonClick()}>
        {props.isSaved ? 'Remove property' : 'Add property'}
      </button>)}
    </Card>
  );
};

export default PropertyCard;
