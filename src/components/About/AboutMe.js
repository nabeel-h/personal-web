import React from "react";

const getPoints = points => points.map((element, index) =>{
    return <p>{element}</p>;
});

const getLiPoints = points => points.map((element, index) => {
    return <li>{element}</li>;
});

class AboutMe extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let introPoints = this.props.data.intro;
        let currentlyPoints = this.props.data.currently;
        let historyPoints = this.props.data.history;
        let randomPoints = this.props.data.random;
        return (
            <div>
                <h3>INTRO</h3>
                    {getPoints(introPoints)}
                <br></br>
                <h3>CURRENTLY</h3>
                    {getPoints(currentlyPoints)}
                <br></br>
                <h3>PERSONAL HISTORY</h3>
                    {getLiPoints(historyPoints)}
                <br></br>
                <h3>RANDOM FACTS</h3>
                    {getLiPoints(randomPoints)}
            </div>
        )
    };

}


export default AboutMe;
