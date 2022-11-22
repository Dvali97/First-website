import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import s from "./Header.module.css";
import Login from "./../Login/Login";
import Registration from "./../Registration/Registration";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
      <header className={s.header}>
          <Logo />
          <Navbar />
          <Search />
          <Login />
          {/* <Registration /> */}
      </header>
  );
};

export default Header;
