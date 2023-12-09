import { Outlet } from "react-router-dom";
import { Header } from "./Header.js";

export default function BaseLayout() {
  return (
    <>
            <Header />
            
            <Outlet />

    </>
  )
}
