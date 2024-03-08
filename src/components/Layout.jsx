import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBarMenu } from "./AppBar/AppBar";

export const Layout = () => {
  return (
    <div
    // style={{
    //   display: "block",
    //   maxWidth: "1184px",
    //   margin: "0 auto",
    // }}
    >
      <AppBarMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
