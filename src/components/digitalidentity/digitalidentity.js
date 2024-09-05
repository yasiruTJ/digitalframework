import React from "react";
import '../../css/digitalidentity.css'; // Import the CSS file

function DigitalIdentity() {
    return (
        <div className="page-container">
            <h1>Digital Identity</h1>
            <div className="inner-container">
                <ul className="resource-list">
                    <li>
                        Online Reputation Management:
                        <ul>
                            <li>Episode three of SWGfL’s online safety podcast focuses on <strong>Online Reputation</strong> — how to manage it, how to protect it, and steps to take if you run into trouble. Understanding and maintaining a positive online reputation is crucial for personal and professional success.</li>
                        </ul>
                    </li>
                    <li>
                        Social Media Checklists:
                        <ul>
                            <li>SWGfL has published downloadable booklets to guide you through managing your profile settings across popular platforms such as <a href="https://www.swgfl.org.uk/magazine/managing-online-profiles-social-media-checklists/" target="_blank" rel="noopener noreferrer">Facebook, Twitter, Instagram, Snapchat, and TikTok</a>. These checklists help you ensure your accounts are secure and your privacy settings are optimized.</li>
                        </ul>
                    </li>
                    <li>
                        Password Management and Security:
                        <ul>
                            <li>Being aware of online and digital security best practices is more important than ever. Start with <a href="https://www.swgfl.org.uk/resources/password-management/" target="_blank" rel="noopener noreferrer">SWGfL’s guide to creating and managing secure passwords</a> to keep your online accounts protected.</li>
                            <li>Check out the <a href="https://www.swgfl.org.uk/resources/password-management/" target="_blank" rel="noopener noreferrer">Generate a Three-Word Password</a> tool, which offers a simple approach to start improving your cybersecurity.</li>
                        </ul>
                    </li>
                    <li>
                        Phishing Awareness:
                        <ul>
                            <li>Learn about one of the most common cyber-crimes with SWGfL’s <a href="https://www.swgfl.org.uk/resources/phishing-guide/" target="_blank" rel="noopener noreferrer">Guide to Phishing Emails</a>. This guide provides essential tips on how to identify phishing attempts and protect your information from cyber threats.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DigitalIdentity;
