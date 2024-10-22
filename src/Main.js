import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function Main(props) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;