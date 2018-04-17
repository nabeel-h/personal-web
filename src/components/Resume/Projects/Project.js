import React from 'react';

const getProjectPoints = points => points.map((element, index) =>{
    return <li key={index}>{element}</li>;
})

class Project extends React.Component {
    componentWillMount() {
    };

    render () {
        let projectsData = this.props.data
        return (
            <article className="projects-container">
                <header>
                    <h4><a href={projectsData.link}>{projectsData.title}</a></h4>
                    <p>{projectsData.subtitle}</p>
                </header>
                <ul className="points">
                    {getProjectPoints(projectsData.points)}
                </ul>
            </article>
        )
    }
};


export default Project;