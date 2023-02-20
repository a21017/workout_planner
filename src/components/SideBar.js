import React, { useState } from "react";
import Box from '@mui/material/Box';

import DraftsIcon from '@mui/icons-material/Drafts';
import { Drawer } from "@material-ui/core";
import {Button} from "@mui/material/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useOutletContext } from "react-router-dom";

const SideBar = () => {

    const [drawerState,setDrawerState] = useOutletContext();

  return (
    <Drawer anchor="left" open={drawerState} onClose={()=>setDrawerState(false)}>
      <Box
        width="250px"
        height="100vh"
        textAlign="center"
        role="presentation"
        style={{ background: "grey" }}
      >
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText primary="My Sessions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
        
      </Box>
    </Drawer>
  );
};

export default SideBar;
