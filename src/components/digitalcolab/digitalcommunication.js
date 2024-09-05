import React from "react";
import '../../css/digitalcommunication.css'; // Import the CSS file

function DigitalCommunication() {
    return (
        <div className="page-container">
            <h1>Digital Communication</h1>
            <div className="inner-container">
                <ul className="resource-list">
                    <li>
                        Digital technology offers various ways to communicate, including email, instant messaging, and video calling. Common communication platforms, such as <a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" target="_blank" rel="noopener noreferrer">Microsoft Teams</a>, offer video calling and chat features and are typically integrated with email applications.
                    </li>
                    <li>
                        Other popular videoconferencing apps include:
                        <ul>
                            <li><a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">WhatsApp</a> - With over 2 billion users worldwide, it is the most popular messaging app, supporting text, voice, and video communication.</li>
                            <li><a href="https://www.skype.com/" target="_blank" rel="noopener noreferrer">Skype</a> - Offers face-to-face and group calls, document exchange, and screen sharing features.</li>
                            <li><a href="https://support.apple.com/en-us/HT204380" target="_blank" rel="noopener noreferrer">Facetime</a> - A group call app available for Apple products, supporting face-to-face and group calls.</li>
                            <li><a href="https://zoom.us/" target="_blank" rel="noopener noreferrer">Zoom</a> - A virtual presentation tool that allows multiple attendees, screen sharing, document exchange, and audio/video sharing.</li>
                            <li><a href="https://workspace.google.com/products/chat/" target="_blank" rel="noopener noreferrer">Google Chat</a> - A communication service that integrates with the Google Workspace collaboration tool, offering seamless chat and communication features.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DigitalCommunication;
