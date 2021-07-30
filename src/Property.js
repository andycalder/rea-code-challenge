import { useState } from 'react';
import './index.css';

function Property(props) {
  const [buttonStyle, setButtonStyle] = useState({display: 'none'});

  const agencyStyle = {
    backgroundColor: props.data.agency.brandingColors.primary
  };

  return (
    <div
      className="property-card"
      onMouseEnter={() => setButtonStyle({display: 'block'})}
      onMouseLeave={() => setButtonStyle({display: 'none'})}
    >
      <div className="agency" style={agencyStyle}>
        <img src={props.data.agency.logo} alt=""/>
      </div>
      <div className="image">
        <img width="300px" src={props.data.mainImage} alt=""/>
      </div>
      <div className="price">{props.data.price}</div>
      <button
        style={buttonStyle}
        onClick={() => props.onButtonClick()}
      >
        {props.saved ? 'remove' : 'add'}
      </button>
    </div>
  );
}

export default Property;
