import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const getRows = positions => positions.map((element, index) =>{
    return <Job data={element} key={index} />;
})

class Experience extends React.Component {
    render() {
        let positionsData = this.props.data
        return (
            <div className="experience">
                <div className="link-to" id="experience" />
                <div className="title">
                    <h3>Experience</h3>
                </div>
                {getRows(positionsData)}            
            </div>
        )
    }
};

Experience.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string,
        position: PropTypes.string,
        link: PropTypes.string,
        daterange: PropTypes.string,
        points: PropTypes.arrayOf(PropTypes.string)
    })),
};

Experience.defaultProps = {
    data: [],
};

export default Experience;
