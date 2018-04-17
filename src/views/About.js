import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import AboutMe from '../components/About/AboutMe';

import aboutMeData from '../data/aboutme.json';

// To Do get counter working
function WordCount(str) { 
  return str.split(" ").length;
}

let count = 0;
console.log(aboutMeData);

for (var i = 0; i < aboutMeData.length; i++){
  console.log("wtf")
  let obj = aboutMeData[i]
  console.log(obj)
  for (var key in obj){
      let attrName = key;
      let list = obj[key];
      console.log(list);
      list.forEach(function(element) {
        let current_count = WordCount(element);
        count = count + current_count;
      });
  }
}


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