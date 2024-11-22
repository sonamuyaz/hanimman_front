import React from "react";
import MyPage from "../pages/User/mypage/MyPage";
import ZzimList from "../pages/Home/mainjs/ZzimList";
import MyProfile from "../pages/User/mypage/MyProfile";
import EditProfile from "../pages/User/mypage/EditProfile";
import MyPost from '../pages/User/mypage/MyPost';
import MyParticipation from '../pages/User/mypage/MyParticipation';
import MainSettings from '../pages/User/settings/MainSettings';


const userRoutes = [
  { path: "/mypage", element: <MyPage /> },          // 마이페이지
  { path: "/zzimlist", element: <ZzimList /> },      // 찜 목록
  { path: "/myprofile", element: <MyProfile /> },
  { path: "/editprofile", element: <EditProfile /> },
  { path: "/mypost", element: <MyPost /> },
  { path: "/myparticipation", element: <MyParticipation /> },
  { path: "/mainsettings", element: <MainSettings /> },

];

export default userRoutes;