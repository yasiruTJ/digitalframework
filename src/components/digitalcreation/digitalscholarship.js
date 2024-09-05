import React from "react";
import '../../css/digitalscholarship.css'; // Import the CSS file

function DigitalCreation() {
    return (
        <div className="page-container">
            <h1>Digital Scholarship</h1>
            <div className="inner-container">
                <ul className="resource-list">
                <li>
                        This range of digital skills plays a vital role in the ability of students to perform effective research tasks. Students who are up to speed in the following areas will have an advantage when embarking on research projects:
                    </li>
                    <li>
                        <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a> is an online database for gathering information for research. It provides a simple way to broadly search for scholarly literature across many disciplines and sources.
                    </li>
                    <li>
                        Data representation and visualization tools include:
                        <ul>
                            <li><a href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer">Power BI</a> - A business analytics tool by Microsoft that provides interactive visualizations and business intelligence capabilities.</li>
                            <li><a href="https://www.tableau.com/" target="_blank" rel="noopener noreferrer">Tableau</a> - A data visualization tool that helps you see and understand your data.</li>
                            <li><a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" rel="noopener noreferrer">Microsoft Excel</a> - A powerful tool for data analysis and visualization with various functions for calculations and graphing tools.</li>
                            <li><a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">Canva</a> - A graphic design platform that allows users to create social media graphics, presentations, posters, documents, and other visual content.</li>
                        </ul>
                    </li>
                    <li>
                        Tools for generating surveys and gathering responses include:
                        <ul>
                            <li><a href="https://www.google.com/forms/about/" target="_blank" rel="noopener noreferrer">Google Forms</a> - A survey administration app that is part of the Google Drive office suite.</li>
                            <li><a href="https://www.surveymonkey.com/" target="_blank" rel="noopener noreferrer">SurveyMonkey</a> - A cloud-based software company that provides free, customizable surveys, as well as a suite of paid back-end programs.</li>
                        </ul>
                    </li>
                    <li>
                        Reference management software for managing bibliographic data and related research materials include:
                        <ul>
                            <li><a href="https://www.zotero.org/" target="_blank" rel="noopener noreferrer">Zotero</a> - A free, easy-to-use tool to help you collect, organize, cite, and share research.</li>
                            <li><a href="https://www.mendeley.com/" target="_blank" rel="noopener noreferrer">Mendeley</a> - A reference manager and academic social network that can help you organize your research, collaborate with others online, and discover the latest developments in your field.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DigitalCreation;
