import LoginPage from './LoginPage';
import MainPage from './LoginPage';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
/* Write a better Readme, improve css */

function App() {
  const [user, setUser] = useState({
    login: '',
    password: ''
});

  return (
    <div className="App">
      <Routes>
        <Route path="login" element = {<LoginPage user={user} setUser={setUser}/>}/>
        <Route path='' element = { <MainPage /> } />
      </Routes>
    </div>
  );
}

export default App;
