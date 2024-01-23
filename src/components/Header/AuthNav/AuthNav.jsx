import style from "./AuthNav.module.scss";
const AuthNav = () => {
  return (
    <div className={style.authNav}>
      <div>log in</div>
      <div>registration</div>
    </div>
  );
};

export default AuthNav;
