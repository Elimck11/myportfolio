import React from 'react';

const Project = ({ title, deployedLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src= "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg"/>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <img src= "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg"/>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <img src= "https://as2.ftcdn.net/v2/jpg/00/53/45/31/1000_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg"/>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
