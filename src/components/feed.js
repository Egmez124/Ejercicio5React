import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';
import {
    HeartSolid,
    ChatAlt2Solid,
    RefreshOutline,
    UserAddSolid
} from "@graywolfai/react-heroicons";

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            iconsFeed: [
                <HeartSolid/>,
                <ChatAlt2Solid/>,
                <RefreshOutline/>,
                <UserAddSolid/>
            ]
        }
    }

    render() {

        const {profile, profileName, username, content, display, interaction} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            display: "",
            interaction: "",
            iconsFeed:"",
            profileImg:""
        };

        return (
            
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileImg={<UserAddSolid/>}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                iconFed1={<ChatAlt2Solid/>}
                                iconFed2={<RefreshOutline/>}
                                iconFed3={<HeartSolid/>}/>
                        )
                    })
                }
                
            </div>
            
        );
    }
}

export default Feed;