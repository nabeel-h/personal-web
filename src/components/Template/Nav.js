import React from 'react';
import { Link } from 'react-router-dom';

import contactData from '../../data/contact.json';

let data = contactData.data;

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo"><img src="/images/me_icon.jpg" alt="" /></Link>
      <header>
        <h2>Nabeel Hussain</h2>
        <p><a href="mailto:n.hussain@protonmail.com">n.hussain@protonmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello! I'm Nabeel Hussain and I love working with data.
            I like to extract data, clean it, store it, analyze it and build tools to display my findings in a programmatic way.
      </p>
      <ul className="actions">
        <li><Link to="/resume" className="button">Learn More</Link></li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link} className={s.icon}><span className="label">{s.label}</span></a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Nabeel Hussain <Link to="https://nabeel-h.herokuapp.com/">nabeel-h</Link>.</p>
    </section>
  </section>
);

export default Nav;