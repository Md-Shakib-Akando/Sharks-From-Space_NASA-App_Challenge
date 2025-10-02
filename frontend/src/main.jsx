import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from './LayOut/RootLayOut.jsx';
import Hero from './Pages/HeroSection/Hero.jsx';
import DashBoard from './Pages/DashBoard.jsx';
import SmartTagConcept from './Pages/SmartTagConcept.jsx';
import About from './Pages/About.jsx';
import SafetyGuide from './Pages/SafetyGuide.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: Hero, },
      { path: 'dashboard', Component: DashBoard },
      { path: 'smart-tag', Component: SmartTagConcept },
      { path: "safety-guide", Component: SafetyGuide },
      { path: 'about', Component: About }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
