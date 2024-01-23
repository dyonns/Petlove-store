import style from "./Nav.module.scss";
const Nav = () => {
  return (
    <div className={style.nav}>
      <div>News</div>
      <div>Find pet</div>
      <div>Our friends</div>
    </div>
  );
};

export default Nav;
