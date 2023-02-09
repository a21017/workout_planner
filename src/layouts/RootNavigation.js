import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const RootNavigation = () => {
  return (
    <>
    <Navigation/>
    <Outlet/>
    </>
  )
}

export default RootNavigation;