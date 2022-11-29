import React from "react";
import styles from "./footer.module.css";
function CircleDiv({ icon, name }) {
  return (
    <>
      {name !== "medium" ?
        <span className={styles.circle}>
          <span style={{ padding: "5px", textDecoration: "none" }}>{icon}</span>
        </span>
       : name == "medium" ? 
        <span className={styles.mediumCircle}>
          <span style={{ padding: "5px", textDecoration: "none" }}>{icon}</span>
        </span>
      :null}
        {/* <span className={styles.circle}>
          <span style={{ padding: "5px", textDecoration: "none" }}>{icon}</span>
        </span> */}
    </>
  );
}

export default CircleDiv;
