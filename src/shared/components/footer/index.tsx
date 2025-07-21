import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={cn(styles.footer__wrapper, "wrapper")}>
        &copy;<span id="year"> </span>
        <span> Your Company Name. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
