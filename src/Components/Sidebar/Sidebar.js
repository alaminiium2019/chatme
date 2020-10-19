import { Avatar, IconButton } from '@material-ui/core';
import { ChatBubbleOutline, ChatBubbleOutlineOutlined, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import SidebarChat from '../SidebarChat/SidebarChat';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar></Avatar>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutline></ChatBubbleOutline>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchOutlined/>                
                <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>
            <div className="sidebar_chats">
            <SidebarChat addNewChat></SidebarChat>
            <SidebarChat></SidebarChat>

            </div>
        </div>
    );
};

export default Sidebar;