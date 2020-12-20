import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header_left'>
                <img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png" alt="" />

                <div className="header_input">
                    <SearchIcon />
                    <input placeholder='Search Facebook' type="text" />
                </div>
            </div>
            <div className='header_center'>
                <div className="header_option">
                    <HomeIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <StoreIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontsize="large" />
                </div>



            </div>


            <div className='header_right'>
                <div className='header_info'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton />
                <AddIcon />
                <IconButton />
                <IconButton />
                <ForumIcon />
                <IconButton />
                <IconButton />

                <NotificationsActiveIcon />
                <IconButton />
                <IconButton />
                <ExpandMoreIcon />
                <IconButton />




            </div>



        </div>

    )
}

export default Header
