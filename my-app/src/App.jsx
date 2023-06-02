import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";
import React, { useState } from 'react';
import Home from './components/main/Home';
import Login from './components/main/Login';
import { GlobalStyle } from './GlobalStyle';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin}/>} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
