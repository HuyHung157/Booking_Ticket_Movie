import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routesHome, routesAdmin } from './routes';
import UserTemplate from "./template/UserTemplate";
import AdminTemplate from "./template/AdminTemplate";
import PageNotFound from "./pages/page-not-found";
// import Header from './components/header/header';
// import Footer from "./components/footer/footer";
// import Loader from "./pages/loader/loader";

// const showContentMenuHome = routesHome => {
//   if (routesHome && routesHome.length > 0) {
//     return routesHome.map((route, index) => {
//       return (
//         <Route
//           key={index}
//           path={route.path}
//           exact={route.exact}
//           component={route.component}
//         />
//       );
//     });
//   }
// }

function App() {
  // console.log(routesHome, routesAdmin)
  const showContentMenuHome = routesHome => {
    if (routesHome && routesHome.length > 0) {
      return routesHome.map((route, index) => {
        return (
          <UserTemplate
            key={index}
            path={route.path}
            exact={route.exact}
            Component={route.component}
          />
        );
      });
    }
  };
  const showContentMenuAdmin = routesAdmin => {
    if (routesAdmin && routesAdmin.length > 0) {
      return routesAdmin.map((route, index) => {
        return (
          <AdminTemplate
            key={index}
            path={route.path}
            exact={route.exact}
            Component={route.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showContentMenuHome(routesHome)}
        {showContentMenuAdmin(routesAdmin)}

        {/* <Route path="/dashboard" component={Admin} /> */}
          {/* Trang PageNotFound - để cuối cùng*/}
          <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
