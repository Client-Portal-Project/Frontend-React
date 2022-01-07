import styles from "../../../styles/layout/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className="container">
        <span>&#169; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
