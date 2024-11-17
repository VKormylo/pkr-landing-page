import React from "react";
import { Card } from "./Card";
import { styles } from "../styles/style";

const Body = () => {
  return (
    <main style={styles.body}>
          {/* Paste your card components here like this <Card name="..." position="..." /> */}
          <Card name="Sofiia Kuhivchak" position="Project manager" />
    </main>
  );
};

export default Body;
