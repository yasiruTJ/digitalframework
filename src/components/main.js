// src/components/Main.js
import React from 'react';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faSitemap, faTty, faGraduationCap, faAddressCard, faComputer} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <div className="Main"> {/* Add this wrapper to center the container */}
      <div className="container">
        <div className="box box1" onClick={() => navigate('/page1')}>
          <FontAwesomeIcon icon={faServer} className="icon" />
          Information, data and media literacies
        </div>
        <div className="box box2" onClick={() => navigate('/page2')}>
          <FontAwesomeIcon icon={faSitemap} className="icon" />
          Digital creation, scholarship and innovation
        </div>
        <div className="box box3" onClick={() => navigate('/page3')}>
          <FontAwesomeIcon icon={faTty} className="icon" />
          Digital Communication, Collaboration and participation
        </div>
        <div className="box box4" onClick={() => navigate('/page4')}>
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          Digital Learning and Development
        </div>
        <div className="box box5" onClick={() => navigate('/page5')}>
          <FontAwesomeIcon icon={faAddressCard} className="icon" />
          Digital identity and wellbeing
        </div>
        <div className="box box6" onClick={() => navigate('/page6')}>
          <FontAwesomeIcon icon={faComputer} className="icon" />
          ICT/Digital Proficiency
        </div>
      </div>
    </div>
  );
}

export default Main;
