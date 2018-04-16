import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            categories: props.categories,
        };
    }

    getColor() {
        return this.state.categories
        .filter(cat => this.state.data.category.includes(cat.name))
        .map(cat => cat.color)[0];
    }

    render() {
        // sets bar width according to competency
        let barWidth = `${String(Math.min(100, Math.max((this.state.data.competency / 5.0) * 100.0, 0)))}%`;
        
        const titleStyle = {
            background: this.getColor(),
        };
        const barStyle = {
            ...titleStyle,
            width: barWidth,
        };
        return (
            <div className="skillbar clearfix">
                <div className="skillbar-title" style={titleStyle}><span>{this.state.data.title}</span></div>
                <div className="skillbar-bar" style={barStyle} />
                <div className="skill-bar-percent">{this.state.data.competency} / 5</div>
            </div>
        );
    }
}

SkillBar.defaultProps = {
    categories: [],
};

export default SkillBar;