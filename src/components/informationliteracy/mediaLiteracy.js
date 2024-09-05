import React from "react";
import '../../css/mainliteracy.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function MediaLiteracy() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <h1>Media Literacy</h1>
            <div className="inner-container">
                <ul className="resource-list">
                    <li>
                        You can test your news literacy knowledge with this <a href="https://www.example.com/news-lit-quiz" target="_blank" rel="noopener noreferrer">News Literacy Project quiz: News Lit Quiz: How news-literate are you?</a>.
                    </li>
                    <li>
                        The <a href="https://www.example.com/media-lit-kit" target="_blank" rel="noopener noreferrer">Centre for Media Literacy (CML) MediaLit Kit</a> provides guidance for successfully introducing media literacy into the classroom.
                    </li>
                    <li>
                        The <a href="https://www.example.com/media-literacy-now" target="_blank" rel="noopener noreferrer">Resource Library of the nonprofit organization Media Literacy Now</a> offers curriculum guides and training opportunities.
                    </li>
                    <li>
                        <a href="https://www.example.com/media-wise" target="_blank" rel="noopener noreferrer">Media Wise</a> offers media literacy courses, videos or workshops to help you spot misinformation.
                    </li>
                    <li>
                        <a href="https://www.example.com/stony-brook" target="_blank" rel="noopener noreferrer">Stony Brook University´s Center for News Literacy</a> offers free resources on news literacy for educators and citizens, including Introducing IMVAIN, an acronym they use to methodically evaluate sources which show up in news stories: Are sources independent, are there multiple sources, do they verify evidence, and are they authoritative, informed and named sources?
                    </li>
                    <li>
                        <a href="https://www.example.com/making-sense-of-news" target="_blank" rel="noopener noreferrer">Making Sense of the News: News Literacy Lessons for Digital Citizens</a> is a free online News Literacy course.
                    </li>
                    <li>
                        The <a href="https://www.example.com/news-literacy-project" target="_blank" rel="noopener noreferrer">News Literacy Project</a> offers 13 online interactive lessons via a virtual classroom, Checkology.
                    </li>
                    <li>
                        <a href="https://www.example.com/reboot-foundation" target="_blank" rel="noopener noreferrer">Teaching Media Literacy</a> is an invaluable resource for teaching students to navigate misinformation published by Reboot Foundation.
                    </li>
                    <li>
                        The guide <a href="https://www.example.com/6-ways-to-identify-fake-news" target="_blank" rel="noopener noreferrer">6 Ways to Identify Fake News: A Complete Guide for Educators</a> provides teachers and students with a clear understanding of how to identify fake news.
                    </li>
                    <li>
                        <a href="https://www.example.com/5-ways-to-teach-critical-thinking" target="_blank" rel="noopener noreferrer">5 Ways to Teach Critical Thinking in Media Literacy to Fight Fake News</a> includes teaching strategies and lesson plans.
                    </li>
                    <li>
                        <a href="https://www.example.com/intro-to-lateral-reading" target="_blank" rel="noopener noreferrer">Intro to Lateral Reading</a> helps students determine who is behind a website and whether that website is trustworthy.
                    </li>
                    <li>
                        <a href="https://www.example.com/bbc-teach" target="_blank" rel="noopener noreferrer">BBC Teach</a> has published an article on news and media literacy resources.
                    </li>
                    <li>
                        For help identifying potentially fake stories, you can read <a href="https://www.example.com/factcheck-guide" target="_blank" rel="noopener noreferrer">Factcheck.org´s guide to spotting fake news</a> or watch this <a href="https://www.example.com/how-to-spot-fake-news" target="_blank" rel="noopener noreferrer">video on How to Spot Fake News</a>.
                    </li>
                    <li>
                        If you wish to flag fake news on Facebook, you can read this <a href="https://www.example.com/flag-fake-news" target="_blank" rel="noopener noreferrer">article</a>.
                    </li>
                    <li>
                        <a href="https://www.example.com/newsfeed-defenders" target="_blank" rel="noopener noreferrer">NewsFeed Defenders</a> is a media literacy game which teaches players how to detect and disregard disinformation and misinformation in today’s chaotic environment.
                    </li>
                    <li>
                        <a href="https://www.example.com/factcheck-channel4" target="_blank" rel="noopener noreferrer">FactCheck – Channel 4 News</a> examines claims made by party leaders, ministers, MPs, and others in positions of power.
                    </li>
                    <li>
                        <a href="https://www.example.com/fact-check-reuters" target="_blank" rel="noopener noreferrer">Fact Check - Reuters</a> verifies content posted on Facebook and Instagram and identifies where media is false or misleading.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MediaLiteracy;
