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
            <div>
                <header>
                    <h4><a href={positionsData.link}>{positionsData.company}</a> - {positionsData.position}</h4>
                </header>
                <ul>
                    {getJobPoints(positionsData.points)}
                </ul>
            </div>
        )
    }
};


export default Job;