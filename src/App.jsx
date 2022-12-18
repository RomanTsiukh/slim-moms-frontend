import { Calculator } from 'pages/Calculator';
import { Diary } from 'pages/Diary';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Logout } from 'pages/Logout';
import { NotFound } from 'pages/NotFound';
import { Registration } from 'pages/Registration';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles';

export const App = () => {
  const showModal = useSelector(state => state.showModal);
  return (
    <>
      <Global styles={GlobalStyles} />
      {showModal && <Modal />}
      <Routes>
        <Route path="" element={<Home />} />

        {/* PRIVATE ROUTES */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/calculator" element={<Calculator />} />

        {/* PUBLICK ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
