import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        <Project 
          title="Project 1" 
          deployedLink="https://link-to-deployed-app.com"
          repoLink="https://github.com/yourusername/project1" 
        />
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Portfolio;
