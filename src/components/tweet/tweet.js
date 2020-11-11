import React from 'react';
import './styles.css';

// import {
//     HiHeart, HiChatAlt, HiRefresh
// } from "react-icons/hi"
class Tweet extends React.Component{
    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        {this.props.profileImg}
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="info">
                    <div className="comments">
                        <div>{this.props.iconFed1}</div>
                        <div>{this.props.comments}</div>
                    </div>
                    <div className="retweets">
                        {this.props.iconFed2}
                        {this.props.retweets}
                    </div>
                    <div className="likes">
                        {this.props.iconFed3}
                        {this.props.likes}
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.