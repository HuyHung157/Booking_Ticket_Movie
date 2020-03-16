import React from "react";
import { Route } from "react-router-dom";
const UserLayout = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default function UserTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <UserLayout>
          <Component {...propsComponent} />
        </UserLayout>
      )}
    />
  );
}
