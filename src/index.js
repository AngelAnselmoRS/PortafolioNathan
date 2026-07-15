import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/navbar';
import IAM from './components/iam/iam';
import Habilities from './components/habilities/habilities';
import Contact from './components/contact/contact';
import AboutMe from './components/aboutme/aboutme';
import Projects from './components/projects/projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <IAM />
    <Habilities />
    <Contact />
    <AboutMe />
    <Projects />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
