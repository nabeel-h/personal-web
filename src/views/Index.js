import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A personal portfolio website written with React.</p>
        </div>
      </header>
      <p> Hey there! Welcome to my personal website. Please feel free to read more <Link to="/about">about me</Link>,
      or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
      or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/nabeel-h/personal-web">here</a>.</p>
    </article>
  </Main>
);

export default Index;