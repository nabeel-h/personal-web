import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Helmet from 'react-helmet';

import Main from '../layouts/Main';

// import json data files
import positionsData from '../data/experience.json';
import degreesData from '../data/degrees.json';
import projectsData from '../data/projects.json';
import skillsData from '../data/skills.json';

// import react components
import Experience from '../components/Resume/Experience';
import Education from '../components/Resume/Education';
import Projects from '../components/Resume/Projects';
import Skills from '../components/Resume/Skills';

const sections = [
    'Education',
    'Experience',
    'Skills',
    'Projects'
]

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    componentWillMount() {
        this.setState({data: {
            positions : positionsData.positions,
            degrees : degreesData.degrees,
            projects : projectsData.projects,
            skills : skillsData
        }});
    }

    componentDidMount() {
    }

    render() {
        let experienceData = this.state.data.positions;
        let educationData = this.state.data.degrees;
        let projectsData = this.state.data.projects;
        let skillsData = this.state.data.skills;

        return (
            <Main>
                <Helmet title="Resume" />
                <article className="post" id="resume">
                    <header>
                        <div className="title">
                            <h2>Resume</h2>
                            <div className="link-container">
                                {sections.map(sec => (
                                    <h4 key={sec}>
                                        <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                                    </h4>))}
                            </div>
                        </div>
                    </header>
                    <Education data={educationData}/>
                    <Experience data={experienceData}/>
                    <Projects data={projectsData}/>
                    <Skills skills={skillsData.skills} categories={skillsData.categories} />

                </article>
            </Main>
        );
    }
}

export default Resume;