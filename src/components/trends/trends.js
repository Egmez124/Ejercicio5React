import React from 'react';
import './styles.css'

class Trends extends React.Component {
    render() {
        return(
            
            <div className="trends-container">
                
                <div className="row">
                    <div className="f1">
                        {this.props.iconProfile}
                    </div>
                    <div className="f1">
                        <h5>{this.props.profile}</h5>
                        <h5>{this.props.username}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="f2">
                        <h3>{this.props.category}</h3>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.noTweets}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Trends;