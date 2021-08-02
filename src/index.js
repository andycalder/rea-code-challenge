import React from 'react';
import ReactDOM from 'react-dom';
import PropertyDashboard from './PropertyDashboard';
import data from './data.json';

ReactDOM.render(
  <PropertyDashboard data={data} />,
  document.getElementById('root')
);
