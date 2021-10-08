import React from "react";
import Styles from "./Navigation.module.css";

function Navigation({ Link, router }) {
  return (
    <div className={Styles.Navigation}>
      <div className={Styles.Navigation__logo}>
        <img className={Styles.logo} src="/Alogo.jpeg" alt="" />
      </div>
      <div className={Styles.Navigation__items}>
        {router.map((item) => (
          <div>
            <Link activeClass="activeTab" spy={true} smooth={true} to={item.to}>
              {item.to}
            </Link>
          </div>
        ))}
        <div className={Styles.Navigation__resume}>
          <a
            href="https://drive.google.com/file/d/1E5Aeb8zYfXUYlPt3bR8oTGv2csNefdSg/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
