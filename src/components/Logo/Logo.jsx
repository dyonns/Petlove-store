import icons from "../../assets_local/icons/sprite.svg";
import style from "./Logo.module.scss";

function Logo() {
  return (
    <>
      <div className={style.title}>
        petl
        <svg className={style.image}>
          <use href={`${icons}#icon-logo`}></use>
        </svg>
        ve
      </div>
    </>
  );
}

export default Logo;
