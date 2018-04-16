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
            <div>
                <header>
                    <h4><a href={projectsData.link}>{projectsData.title}</a></h4>
                    <p>{projectsData.subtitle}</p>
                </header>
                <ul>
                    {getProjectPoints(projectsData.points)}
                </ul>
            </div>
        )
    }
};


export default Project;