import React from 'react';
import './About.css';

function About() {
  return (
    <div className="abtsection">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQGl1XDIlP6sDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670530327362?e=1750291200&v=beta&t=4rvU5vIDP4jfdn_kJxCgdutQiTmLl7bJoPgUkXNk9Zo"
        alt="Holly Drazenovich"
        className="profile-pic"
      />
      <div className="abouttxt">
        <h2>About Me</h2>
        <p>
        Hi I'm Holly! With over five years of experience in sales, hospitality, and customer service,
         seamlessly transitioning into the dynamic realm of tech and software development.
         Evolving from avidly scrolling through websites to actively constructing them, showcasing the intersection of software engineering and creative innovation.
        </p>
      </div>
    </div>
  );
}

export default About;
