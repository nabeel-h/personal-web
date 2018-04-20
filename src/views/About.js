import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import AboutMe from '../components/About/AboutMe';

import aboutMeData from '../data/aboutme.json';

// To Do get counter working

const About = () => (
  <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
        </div>
      </header>
      <AboutMe data={aboutMeData} />
    </article>
  </Main>
);

export default About;