import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import Header from './pages/header'
import {useRoutes} from "react-router-dom"
import Signup from './pages/signup'
import Forgot from './pages/forgot'
import HelpdeskUserApp from './pages/dashboardUser'
import TeamDashboard from './pages/dashboardTeam'
function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
        {
      path: "/signup",
      element: <Signup/>,
    },
       {
      path: "/forgot",
      element: <Forgot/>,
    },
      {
      path: "/dashboard/user",
      element: <HelpdeskUserApp/>,
    },
     {
      path: "/dashboard/team",
      element: <TeamDashboard/>,
    }
  ];
  
  let routesElement = useRoutes(routesArray);
  return (
    <>
  
      {/* <CursorFollower/> */}
   
      {/* <Header /> */}
      {/* Full screen height minus header with flex column */}
      <div className="  ">
        {routesElement}
      </div>


  
    </>
  );
}


export default App
