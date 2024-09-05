// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main.js';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import MainInformationLiteracy from './components/informationliteracy/mainliteracy.js';
import DataLiteracy from './components/informationliteracy/dataliteracy.js';
import MediaLiteracy from './components/informationliteracy/mediaLiteracy.js';
import DataCreation from './components/digitalcreation/digitalcreation.js';
import DigitalScholarship from './components/digitalcreation/digitalscholarship.js';
import DigitalCommunication from './components/digitalcolab/digitalcommunication.js';
import DigitalCollaboration from './components/digitalcolab/digitalcollaboration.js';
import DigitalDevelopment from './components/digitaldev/digitaldevelopment.js';
import DigitalIdentity from './components/digitalidentity/digitalidentity.js';
import DigitalWellbeing from './components/digitalidentity/digitalwellbeing.js';
import ICTProficiency from './components/ictproficiency/ictproficiency.js';
// Add additional pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/digitalframework" element={<Main />} />
        <Route path="/digitalframework/page1" element={<Page1 />} />
        <Route path="/digitalframework/page2" element={<Page2 />} />
        <Route path="/digitalframework/page3" element={<Page3 />} />
        <Route path="/digitalframework/page4" element={<Page4 />} />
        <Route path="/digitalframework/page5" element={<Page5 />} />
        <Route path="/digitalframework/page6" element={<Page6 />} />
        <Route path="/informationLiteracy" element={<MainInformationLiteracy />} />
        <Route path="/dataLiteracy" element={<DataLiteracy />} />
        <Route path="/mediaLiteracy" element={<MediaLiteracy />} />
        <Route path="/digitalCreation" element={<DataCreation />} />
        <Route path="/digitalScholarship" element={<DigitalScholarship />} />
        <Route path="/digitalCommunication" element={<DigitalCommunication />} />
        <Route path="/digitalCollaboration" element={<DigitalCollaboration />} />
        <Route path="/digitalDevelopment" element={<DigitalDevelopment />} />
        <Route path="/digitalIdentity" element={<DigitalIdentity />} />
        <Route path="/digitalWellbeing" element={<DigitalWellbeing />} />
        <Route path="/ictProficiency" element={<ICTProficiency />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
