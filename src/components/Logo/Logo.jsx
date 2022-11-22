import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={s.logoContainer}>
      <a href="#">
        <img
          className={s.logo}
          alt="logo"
          src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
        />
      </a>
    </div>
  );
};

export default Logo;
