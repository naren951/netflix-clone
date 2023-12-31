import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login(
          {
            uid: userAuth.uid,
            email: userAuth.email,
          }
        ))
      } else {
        dispatch(logout);
      }
      return unsubscribe;
    })
  })

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path="/" element={!user ? <HomeScreen /> : <LoginScreen />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
