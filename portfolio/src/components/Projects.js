import React from 'react';
import './Projects.css';


function Projects() {
  return (
    <div className="prgsection">
     <div className="slideshow">
     <div class="card">
    <h4><b>Stardew TODO</b></h4>
    <a href='https://github.com/HollyDraz/stardew_todo'>REPO</a>
    <p>Current project where I make a simple todo list for the popular farm game, Stardew Valley</p>
    </div>
     <div class="card">
    <h4><b>Record Scratch</b></h4>
    <a href='https://github.com/HollyDraz/record-scratch'> Repository</a>
    <p>Full CRUD functionality app built with JS, HTML, CSS, REACT</p>
    </div>
    <div class="card">
    <h4><b>Cocktail Finder</b></h4>
    <a href='https://github.com/HollyDraz/cocktailfinder'> REPO</a>
    <p>Simple API based cocktail app. Built with JS, CSS, HTML</p>
    </div>
    </div>

    </div>
  );
}

export default Projects;
