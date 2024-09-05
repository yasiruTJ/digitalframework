// src/pages/Page1.js
import React from 'react';
import '../css/page2.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faPaintBrush, faBrain, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Page2() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Digital creation, scholarship and innovation</h1>
      <div className="inner-container">
        <div className="box box1" onClick={() => navigate('/digitalCreation')}>
          <FontAwesomeIcon icon={faPaintBrush} className="icon" />
          Digital creation
        </div>
        <div className="box box2" onClick={() => navigate('/digitalScholarship')}>
          <FontAwesomeIcon icon={faBrain} className="icon" />
          Scholarship
        </div>
        <div className="box box3">
          <FontAwesomeIcon icon={faLightbulb} className="icon" />
          Innovation
        </div>
      </div>
    </div>
  );
}

export default Page2;
