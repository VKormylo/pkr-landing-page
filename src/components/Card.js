import React from "react";
import { styles } from "../styles/style";

export const Card = ({ name, position }) => {
  return (
    <div style={styles.card}>
      <img src={"/avatar-default.png"} alt="John Doe" style={styles.photo} />
      <div style={styles.textContainer}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.position}>{position}</p>
      </div>
    </div>
  );
};
