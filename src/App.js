import React from 'react'
import './App.scss';

import HomeBanner from './components/HomeBanner';

import Banner from './components/Banner';
import List from './components/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={
            <React.Fragment>
              <Header />
              <HomeBanner />
            </React.Fragment>
          } />

          <Route path='/login' element={
            <React.Fragment>
              <Header />
              <Login />
            </React.Fragment>
          } />

          <Route path="/register" element={
            <React.Fragment>
              <Header />
              <Login />
            </React.Fragment>
          } />

          <Route path='/dashboard' element={
            <React.Fragment>
              <Header />
              <Banner />
              <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
            </React.Fragment>
          } />

        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default App;
