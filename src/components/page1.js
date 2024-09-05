// src/pages/Page1.js
import React from 'react';
import '../css/page1.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCircleInfo, faDatabase, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Information, data and media literacies</h1>
      <div className="inner-container">
        <div className="box box1" onClick={() => navigate('/informationLiteracy')}>
          <FontAwesomeIcon icon={faCircleInfo} className="icon" />
          Information literacy
        </div>
        <div className="box box2" onClick={() => navigate('/dataLiteracy')}>
          <FontAwesomeIcon icon={faDatabase} className="icon" />
          Data literacy
        </div>
        <div className="box box3" onClick={() => navigate('/mediaLiteracy')}>
          <FontAwesomeIcon icon={faPhotoFilm} className="icon" />
          Media literacy
        </div>
      </div>
    </div>
  );
}

export default Page1;
