import React from "react";
import {
  TextField,
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  FilledInput,
  Drawer,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  FormControlLabel,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const ProfilePage = () => {
  const param = useParams();

  const maingridstyle = {
    background: "white",
    height: "100vh",
    width: "100vw",
    marginTop: "0px",
    padding: "30px",
  };

  const paperstyle = {
    height: "100%",
    padding: "10px",
    width: "90vw",
    margin: "0px auto",
    background: "transparent",
    color: "white",
    textAlign:'center',
    
  };

  const avatarstyle = {
    background: "#0043ff",
  };

  return (
    <>
    <SideBar></SideBar>
    <Grid container >
      <Grid item style={{ margin: "30px auto" }}>
        <Box component="div" style={paperstyle} elevation={4}>
          <Grid style={{ marginTop: "50px" }} align="center">
          <Avatar alt="dp" src="https://i.ytimg.com/vi/IBOrp-ZU_pE/maxresdefault.jpg" />
            <Typography variant="h5">Profile Details</Typography>
          </Grid>
          <Paper
            style={{
              width: "80%",
              borderRadius: "12px",
              background: "grey",
              padding: "15px",
              margin:'5px auto',
              
            }}
            elevation={20}
          >
            <Grid container spacing={2} style={{display:'flex',
              justifyContent:'center',
              alignItems:'center'}}>
              <Grid item >
                <InputLabel htmlFor="name">Name</InputLabel>
                <FilledInput id="name" defaultValue="Composed TextField" />
              </Grid>

              <Grid item >
                <InputLabel htmlFor="age">Age</InputLabel>
                <FilledInput id="age" defaultValue="Composed TextField" />
              </Grid>

              <Grid item>
                <InputLabel htmlFor="height">Height</InputLabel>
                <FilledInput id="height" defaultValue="Composed TextField" />
              </Grid>

              <Grid item>
                <InputLabel htmlFor="weight">Weight</InputLabel>
                <FilledInput id="weight" defaultValue="78 Kg" />
              </Grid>

              <Grid item>
                <InputLabel htmlFor="goal">Goal</InputLabel>
                <FilledInput id="goal" defaultValue="Lean Bulk" />
              </Grid>
            </Grid>
            <Grid container>
            <Button style={{margin:'10px auto',color:'green'}}>Save</Button>
            <Button style={{margin:'10px auto',color:'red'}}>Cancel</Button>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default ProfilePage;
