import style from "./SharedLayout.module.scss";
import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";

const SharedLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className={style.wrapper}>
            <Logo />
            {/* <div>LOGO</div> */}
            <div>
              <div>News</div>
              <div>Find pet</div>
              <div>Our friends</div>
            </div>
            <div>
              <div>LOG IN</div>
              <div>REGISTRATION</div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default SharedLayout;
