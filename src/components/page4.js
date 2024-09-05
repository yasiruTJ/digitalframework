// src/pages/Page1.js
import React from 'react';
import '../css/page4.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Page4() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Digital Learning and Development</h1>
      <div className="inner-container">
        <div className="box box1" onClick={() => navigate('/digitalDevelopment')}>
          <FontAwesomeIcon icon={faUserGraduate} className="icon" />
          Digital learning and professional learning development
        </div>
      </div>
    </div>
  );
}

export default Page4;
