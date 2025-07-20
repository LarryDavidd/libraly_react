import React from "react";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      &copy;<span id="year"> </span>
      <span> Your Company Name. All rights reserved.</span>
    </div>
  );
};

export default Footer;
