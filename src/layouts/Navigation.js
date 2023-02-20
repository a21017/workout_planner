import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const Navigation = (props) => {


    const navigate = useNavigate();

  const useStyles = makeStyles((theme) => ({
    root: {
      flexgrow :1,
      width:"100vw"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexgrow: 1,
    },
  }));

  const classes = useStyles();

  

  return (
   
    <div className={classes.root}>
      <AppBar position="static"> 
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={props.onClickHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  style={{ flex: 1 }} className={classes.title}>
            Workout-Planner
          </Typography>
          <div>
          <Button color="inherit" onClick={()=>navigate('/login')}>Login</Button>
          </div>
         
        </Toolbar>
      </AppBar>
       
    </div>
    
   
  );

  //navbar
};

export default Navigation;