import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const RootNavigation = () => {

  const [drawerState,setDrawerState] = useState(false);
  // const onDrawerHandler = ()=>{
  //   // setDrawerState(true);
  //   console.log('Drawer')
  // }

  

  return (
    <>
    <Navigation onClickHandler={()=>{setDrawerState(true)}}/>
    <Outlet context={[drawerState,setDrawerState]}/> 
    </>
  )
}

export default RootNavigation;