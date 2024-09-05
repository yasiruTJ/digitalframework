// src/pages/Page1.js
import React from 'react';
import '../css/page5.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faFingerprint, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Page5() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Digital identity and wellbeing</h1>
      <div className="inner-container">
        <div className="box box1" onClick={() => navigate('/digitalIdentity')}>
          <FontAwesomeIcon icon={faFingerprint} className="icon" />
          Digital identity management
        </div>
        <div className="box box2" onClick={() => navigate('/digitalWellbeing')}>
          <FontAwesomeIcon icon={faUserDoctor} className="icon" />
          Digital wellbeing
        </div>
      </div>
    </div>
  );
}

export default Page5;
