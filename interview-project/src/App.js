import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Toolbar, Typography, Box, Tabs, Tab, Slide} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {Outlet, useNavigate} from "react-router-dom";
// import { MainComponent } from "../src/Components/main-component";
import {BrowserRouter} from "react-router-dom";
import React, { Component }  from 'react';

import {Navbar} from "./Components/navbar-component";

function App() {

  return (
      <>
        <Navbar/>
      </>
  );

}

export default App;
