import style from "./SharedLayout.module.scss";
import { Outlet } from "react-router-dom";
import Logo from "../Header/Logo/Logo";
import Nav from "../Header/Navigation/Nav";
import AuthNav from "../Header/AuthNav/AuthNav";
import UserNav from "../Header/UserNav/UserNav";

const SharedLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className={style.wrapper}>
            <Logo />
            <div className={style.navExtension}>
              <Nav />
            </div>
            <AuthNav />
            {/* <UserNav /> */}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default SharedLayout;
