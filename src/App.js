import React from "react";
import Nav from "./components/Nav";
import CoverPicture from "./components/CoverPicture";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import { ContextProvider } from "./components/Context";
import { CssBaseline } from "@material-ui/core";
import Login from "./components/Login";
import Users from "./components/Users";
import View from "./components/View" ;
import Add from "./components/Add" ;

function App() {
  const eleConfig = {
    name: {
      UIType: "input",
      type: "text",
      placeholder: "enter value",
      required: true,
      isvalid: false
      } ,
      email :{
          UIType: "input",
          type: "email",
          placeholder: "enter email",
          required: true,
          isvalid: false
      },
      button :{
          UIType: "input",
          type: "submit",
          value: "Log in",
          isvalid: true
      }
  };
  return (
    <BrowserRouter>
      <CssBaseline />
      <ContextProvider>
        <div className="App">
          <Nav />
          <CoverPicture />
          <main>
            <Switch>
              <Route path="/users" component={Users} />
              <Route path="/login" component={Login} />
              <Route path="/add"  render = {()=><Add {...eleConfig} />} />
              <Route path="/view" component={View} />
              <Route path="/" component={Main} />
            </Switch>
          </main>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
