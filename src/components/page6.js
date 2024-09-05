// src/pages/Page1.js
import React from 'react';
import '../css/page6.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Page6() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>ICT/Digital Proficiency</h1>
      <div className="inner-container">
        <div className="box box1" onClick={() => navigate('/digitalIdentity')}>
          <FontAwesomeIcon icon={faPrint} className="icon" />
          ICT/Digital proficiency and productivity
        </div>
      </div>
    </div>
  );
}

export default Page6;
