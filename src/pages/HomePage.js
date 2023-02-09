import { Container, Typography } from "@material-ui/core";

import React from "react";


const HomePage = () => {




  return (
    // <Container >
     
      <div style={{background:"url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) no-repeat", 
      width:"100%",
          height: "100vh",
          opacity: "0.6",
          margin: "0px",
          padding: "0px",
          backgroundSize:'cover',
          display:'flex',
          flexDirection:'column',
          'justifyContent':'center',
          'alignItems':'center'
          }}>
      
      <Typography variant="h3" style={{fontWeight:"bolder",color:'white'}}>Lets Log your Workout Session</Typography>
    
      </div>
      
    // </Container>
  );

  //navbar
};

export default HomePage;
