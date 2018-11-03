import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <p>Sorry this page doesn't exist.</p>
      <Link to="/dashboard">
        <button className="button--secondary">Go Home</button>
      </Link>
    </div>
  </div>
);

export default FourOhFour;