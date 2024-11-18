// src/App.js
import "./App.css"
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingScreen from './pages/Auth/beforemainjs/LoadingScreen';
import LoginPage from './pages/Auth/beforemainjs/LoginPage'
import MainPage from './pages/Home/mainjs/MainPage'
import KeyNoti from './pages/Home/mainjs/KeyNoti';
import LocationPage from './pages/Auth/beforemainjs/LocationPage'
import VertificationPage from './pages/Auth/beforemainjs/VertificationPage'
import Notification from './pages/Home/mainjs/Notification'
import MyPage from './pages/User/mypage/MyPage'
import ZzimList from './pages/Home/mainjs/ZzimList';
import MyPost from './pages/Home/mainjs/MyPost';
import MyParticipation from './pages/Home/mainjs/MyParticipation';
import Events from './pages/Home/mainjs/Events';
import Announcement from './pages/Home/mainjs/Announcement';
import FAQ from './pages/Home/mainjs/FAQ';
import Terms from './pages/Home/mainjs/Terms';


import LocationSelect from './components/LocationSelect';
import TogetherList from './pages/Post/Together/TogetherList';
import TogetherCreate from './pages/Post/Together/TogetherCreate';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/vertification" element={<VertificationPage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/keynoti" element={<KeyNoti/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path='/togetherlist' element={<TogetherList/>} />
        <Route path='/togethercreate' element={<TogetherCreate/>} />
        <Route path="/zzimlist" element={<ZzimList/>} />
        <Route path='/locationselect' element={<LocationSelect/>} />
        <Route path='/mypost' element={<MyPost/>} />
        <Route path='/myparticipation' element={<MyParticipation/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/announcement' element={<Announcement/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
    </Router>
  );
};

export default App;