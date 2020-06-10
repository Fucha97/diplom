import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DialogRegistration } from "./components/authentication-page";
import { LoginForm } from "./components/login-form";
import { ProfilePage } from './components/profile-page';
import "./app.scss";

const RouterPath = {
  /** Страница регистрации */
  registration: "/registration/",
  /** Страница ввода логина */
  login: "/login",
  main: "/",
  profile:"/profile/:id/"
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path={RouterPath.registration}
            exact
            component={DialogRegistration}
          />
          <Route path={RouterPath.login} exact component={LoginForm} />
          <Route path={RouterPath.main} exact component={LoginForm} />
          <Route path={RouterPath.profile} exact component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
