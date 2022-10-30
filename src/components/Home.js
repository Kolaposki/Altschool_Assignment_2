import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>

      <Nav />
      <Outlet />
      <h3 class="home-heading">Welcome to this React App!</h3>
      <p>The navigation above will direct you to the page of your choice.</p>
      <p>	&#169; 2022 Kolaposki</p>
    </div>
  )
}
