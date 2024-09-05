import React from "react";
import '../../css/mainliteracy.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function MainLiteracy() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <h1>Information Literacy</h1>
            <div className="inner-container">
                <ul className="resource-list">
                    <li>
                        The Academic Engagement Team runs a programme of events throughout the year to help you succeed in your studies. These events will help you search for relevant information for your assignments, using Library Search and relevant databases, use Grammarly, citing and referencing your sources, etc. Your Academic Engagement Librarian can help you get the best from library resources, offering subject-specific help and advice. The Learning Development Team offers one-to-one appointments, workshops on the following topics: research, referencing, time management, critical thinking, essay writing, report writing, reflective writing, literature reviews, dissertations, presentations and exam preparation. All workshops are bookable via Engage. Their Academic Skills guides offer guidance, activities, and videos to help you succeed at your assessments.
                    </li>
                    <li>
                        For information on academic skills workshops as well as guides on citing and referencing, subject-specific resources, study skills, and more, please see: 
                        <a href="https://libguides.westminster.ac.uk/" target="_blank" rel="noopener noreferrer">Libguides</a>.
                    </li>
                    <li>
                        In the tutorial Introduction to searching online, you will learn how to use a browser to find information. 
                        <a href="https://www.example.com/search-tips" target="_blank" rel="noopener noreferrer">5 Must-Have Google Search Tips for Students</a> provides useful tips for Google research. 
                        <a href="https://www.example.com/search-coach" target="_blank" rel="noopener noreferrer">Search Coach</a>, a free tool in Microsoft Teams, provides students context and guidance to ask effective questions and discover reliable sources. 
                        Quick lesson plans introduce concepts students can apply in search engines like Bing or Google. 
                        <a href="https://www.example.com/evaluating" target="_blank" rel="noopener noreferrer">Evaluating Online Resources: The Complete Beginners Guide</a> helps you identify trustworthy content online as well as avoid plagiarism, copyright infringement, and problems with accessibility. 
                        One way of evaluating the information that you find is by performing the <a href="https://www.example.com/craap-test" target="_blank" rel="noopener noreferrer">CRAAP test</a>.
                    </li>
                    <li>
                        You could register with the Intellectual Property Office (IPO) in order to access IPO´s only support tools. The tools are helpful for anyone interested in intellectual property rights. They are free to use once you are registered. 
                        <a href="https://www.example.com/ipo-tools" target="_blank" rel="noopener noreferrer">IPO Tools</a>.
                    </li>
                    <li>
                        A Complete Guide to Using and Managing Tags in Microsoft OneNote. 
                        <a href="https://www.example.com/onenote-tags" target="_blank" rel="noopener noreferrer">Guide to Tags in OneNote</a>.
                    </li>
                    <li>
                        Episode nine of SWGfL´s online safety podcast What is Misinformation talks about misinformation and fake news.
                    </li>
                    <li>
                        <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
                            Pexels
                        </a> is a repository of copyright-free images.
                    </li>
                    <li>
                        <a href="https://www.slideshare.net/" target="_blank" rel="noopener noreferrer">
                            Slideshare
                        </a> is an online repository of presentations where learners can also publish their work.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainLiteracy;
