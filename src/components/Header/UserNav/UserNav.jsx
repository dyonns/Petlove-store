import icons from "../../../assets_local/icons/sprite.svg";
import style from "./UserNav.module.scss";

const UserNav = () => {
  return (
    <div className={style.userNav}>
      <div>log out</div>
      <div>
        <div className={style.iconFone}>
          <svg className={style.icon}>
            <use href={`${icons}#icon-user`}></use>
          </svg>
        </div>
        Name
      </div>
    </div>
  );
};

export default UserNav;
