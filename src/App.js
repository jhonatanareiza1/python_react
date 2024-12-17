import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";

import Signup from "./containers/auth/Signup";
import Login from "./containers/auth/Login";
import Activate from "./containers/auth/Activate";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error en el Display*/}
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<Home />} />

          {/*Autenticaciones*/}
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
