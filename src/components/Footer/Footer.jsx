import s from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={s.footer}>
      <footer>
        <span className={s.rights}>© 2022 Dito Dvali. all rights reserved</span>
      </footer>
    </div>
  );
};

export default Footer;
