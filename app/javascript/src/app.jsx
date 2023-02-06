import React from 'react';
import ReactDOM from 'react-dom'
import Home from './home'
import Profile from './profile'


const App= (props) => {
  return (
    <Home></Home>,
    <Profile></Profile>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})