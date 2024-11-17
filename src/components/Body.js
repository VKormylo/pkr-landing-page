import React from "react";
import { Card } from "./Card";
import { styles } from "../styles/style";

const Body = () => {
  return (
    <main style={styles.body}>
      {/* Paste your card components here like this <Card name="..." position="..." /> */}
      <Card name="Tania Medvid" position="Business analyst"/>
    </main>
  );
};

export default Body;
