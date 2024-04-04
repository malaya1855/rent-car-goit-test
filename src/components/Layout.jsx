import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBarMenu } from "./AppBar/AppBar";

export const Layout = () => {
  return (
    <div>
      <AppBarMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
