import React from 'react';

function BioData({ name = 'Keshav', age = 20, university = 'CU' }) {
  return (
    <div className="biodata-wrapper">
      <div className="biodata-card">
        <h3 className="biodata-title">Profile</h3>

        <p className="biodata-line">
          <span className="biodata-label">Name:</span>
          <span className="biodata-value">{name}</span>
        </p>

        <p className="biodata-line">
          <span className="biodata-label">University:</span>
          <span className="biodata-value">{university}</span>
        </p>

        <p className="biodata-line">
          <span className="biodata-label">Age:</span>
          <span className="biodata-value">{age}</span>
        </p>
      </div>
    </div>
  );
}

export default BioData;
