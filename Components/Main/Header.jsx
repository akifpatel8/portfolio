import React from "react";
import Styles from "./Header.module.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Header() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);


  return (
    <div>
    <div className={`${Styles.Header}`}>
      <div className={Styles.Header__pic}>
        <img
          src="/akif.jpg"
          alt="profile"
        />
      </div>
      <div className={Styles.Header__content}>
        <h1>Akif Patel</h1>
        <p>Full Stack Web <span ref={textRef}></span></p>
      </div>
    </div>
    </div>
  );
}

export default Header;
