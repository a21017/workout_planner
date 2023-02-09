import { TextField,Container, Grid, Paper, Avatar, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';


import { FormControl,Input,FormHelperText,InputLabel, FormControlLabel } from '@mui/material';

import React from 'react'

const LoginPage = () => {

  const maingridstyle = {
    background:'white',
    height:'100vh',
    marginTop:'0px',
    padding:'30px'
  }

  const paperstyle = {
    height:'70vh',
    padding:'10px',
    width:'40vw',
    margin:'0px auto',
    background:'rgba(114, 110, 109,0.4)',
    
  }

  const avatarstyle = {
    background:'#0043ff',
  }

  return (
  
    <Grid style={maingridstyle} >

      <Paper style={paperstyle} elevation={20}>
      <Grid style={{marginTop:'50px'}} align='center'>
      <Avatar style={avatarstyle}><LockOpenIcon/></Avatar>
      <Typography variant='h5'>Sign In</Typography>
     
      </Grid>
      <Grid  style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px'}}>
      <TextField variant='outlined' style={{width:'50%',marginBottom:'10px'}} label="Username" placeholder='Enter username' required />
      <TextField variant='outlined' style={{width:'50%',marginBottom:'10px'}} label="Password" placeholder='Enter password' required />
      <FormControlLabel style={{marginBottom:'10px'}} control={<Checkbox defaultChecked />} label="Remember Me" />
      <Button style={{marginBottom:'10px'}} variant='contained'>Sign In</Button>
      <Typography style={{marginTop:'10px'}}>
        Doesn't have an account?
        <Link style={{marginLeft:'5px'}} to={'/'}>Sign Up</Link>
      </Typography>
      </Grid>
      </Paper>

    </Grid>

  )
}

export default LoginPage