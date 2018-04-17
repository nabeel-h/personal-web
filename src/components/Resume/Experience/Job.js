import React from 'react';

const getJobPoints = points => points.map((element, index) =>{
    return <li key={index}>{element}</li>;
})

class Job extends React.Component {
    componentWillMount() {
    };

    render () {
        let positionsData = this.props.data
        return (
            <article className="jobs-container">
                <header>
                    <h4><a href={positionsData.link}>{positionsData.company}</a> - {positionsData.position}</h4>
                    <p>{positionsData.daterange}</p>
                </header>
                <ul className="points">
                    {getJobPoints(positionsData.points)}
                </ul>
            </article>
        )
    }
};


export default Job;