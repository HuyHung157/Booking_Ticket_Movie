import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Header from './components/header/header';

import { routesHome } from './routes';
// import Loader from "./pages/loader/loader";

const showContentMenuHome = routesHome => {
  if (routesHome && routesHome.length > 0) {
    return routesHome.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      );
    });
  }
}

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
        <Switch>
          {/* <Loader/> */}
        {showContentMenuHome(routesHome)}
        {/* {showMenuAdmin(routesAdmin)} */}

        {/* <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/booking-tickets" component={Bookingtickets} /> */}

        {/* <Route path="/admin" component={Admin} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
