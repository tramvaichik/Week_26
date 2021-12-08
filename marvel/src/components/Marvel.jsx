import React from "react";

class Marvel extends React.Component {
    render() {
        const { name, pseudonym, what_does, more_details, picture } = this.props;
        return (
            <div className="heroes-card">
                <div className="heroes-info">
                    <img src={picture} alt="heroes Marvel"  className="heroes-img" />
                    <div className="heroes-name"> {name} </div>
                    <div className="heroes-pseudonym"> {pseudonym} </div>
                    <div className="heroes-what_does"> {what_does} </div>
                    <div className="heroes-more_details"> {more_details} </div>
                </div>
            </div>
        )
    }
}

export default Marvel;