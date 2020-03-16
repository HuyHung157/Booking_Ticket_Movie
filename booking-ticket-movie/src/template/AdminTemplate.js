import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminLayout = props => {
  return (
    <div>
      {/* header */}

      {/* page begin */}
      {props.children}
      {/* page end */}

      {/* footer */}
    </div>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        //   check user admin
        if (JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "QuanTri" ) {  
        // if (localStorage.getItem("User")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
