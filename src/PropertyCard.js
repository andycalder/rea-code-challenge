import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.li`
  background: lightgray;
  margin: 0.5em;
`;

const AgencyBanner = styled.div`
  width: 100%;
  background: ${props => props.color};
`;

const Button = styled.button`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const PropertyCard = (props) => {
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
      <Button
        visible={buttonVisible}
        onClick={() => props.onButtonClick()}
      >
        {props.isSaved ? 'Remove property' : 'Add property'}
      </Button>
    </Card>
  );
};

export default PropertyCard;
