import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import projectsData from '../data/projects.json';

let data = projectsData.projects;

const getRows = () => data.map(project => (
  <Cell
    data={project}
    key={project.title}
  />
));

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>A collections of projects I've worked on.</p>
        </div>
      </header>
      {getRows()}
    </article>
  </Main>
);

export default Projects;