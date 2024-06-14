import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { getUserInfo } from "./lib/api/auth";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  console.log('로그인된 유저 정보', user);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout user={user} setUser={setUser} />}>

              <Route
                index
                element={<Home user={user} />} />

              <Route
                path="/detail/:id"
                element={<Detail/>} />
                
              <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser}/>}
              />
            </Route>

            <Route path="login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
