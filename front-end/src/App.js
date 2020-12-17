import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Groups from "./component/Groups/Groups";
import Home from "./component/Home/Home";
import Profile from "./component/Profile/Profile";
import Setting from "./component/Setting/Setting";
import Library from "./component/library/Library";
import Login from "./component/Entry/Login";
import Register from "./component/Entry/Register";
import "./App.css";
 
const App = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <Router>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/library" exact component={Library} />
      <Route path="/login" exact component={Login} />
      <Route path="/setting" exact component={Setting} />
      <Route path={`/:username`} exact component={Profile} />
      <Route path="/register" exact component={Register} />
      <Route path="/groups" exact component={Groups} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
