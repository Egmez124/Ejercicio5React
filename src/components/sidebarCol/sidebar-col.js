import React from 'react';
import Trends from '../trends/trends';
import {trends} from '../../trends'
import './styles.css'
import {
    UserAddSolid
} from "@graywolfai/react-heroicons";
class SidebarCol extends React.Component {
    constructor() {
        super();
        this.state = {
            trends: trends,
            iconsProfile:[
                <UserAddSolid/>
            ]
        }
    }
    render() {
        // const {category, title, noTweets} = {
        //     category: "",
        //     title: "",
        //     noTweets: ""
        // };
        return(
            <div className="t-sidebar-col">
                <input type="text"  name="search"></input>
                <button type="submit"><i class="fa fa-search">Search</i></button>
            {
                this.state.trends.map(trend=>{
                    return (
                        <Trends
                        iconProfile={<UserAddSolid/>}
                        profile={trend.profile}
                        username={trend.username}
                        category={trend.category}
                        title={trend.title}
                        noTweets={trend.noTweets}/>
                    )
                })
            }
        </div>
        );
    }
}


export default SidebarCol;