// src/pages/Page1.js
import React from 'react';
import '../css/page3.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTty, faHandshake, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Page3() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Digital Communication, Collaboration and participation</h1>
      <div className="inner-container">
        <div className="box box1" onClick={() => navigate('/digitalCommunication')}>
          <FontAwesomeIcon icon={faTty} className="icon" />
          Digital communication
        </div>
        <div className="box box2" onClick={() => navigate('/digitalCollaboration')}>
          <FontAwesomeIcon icon={faHandshake} className="icon" />
          Digital collaboration
        </div>
        <div className="box box3">
          <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
          Digital participation
        </div>
      </div>
    </div>
  );
}

export default Page3;
