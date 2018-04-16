import React from 'react';
import PropTypes from 'prop-types';

import Project from './Projects/Project';

const getRows = positions => positions.map((element, index) =>{
    return <Project data={element} key={index} />;
})

class Projects extends React.Component {
    render() {
        let projectsData = this.props.data
        return (
            <div>
                <div className="link-to" id="projects" />
                <div className="title">
                    <h3>Projects</h3>
                </div>
                {getRows(projectsData)}            
            </div>
        )
    }
};

//Projects.propTypes = {
//    data: []
//};

Projects.defaultProps = {
    data: [],
};

export default Projects;
