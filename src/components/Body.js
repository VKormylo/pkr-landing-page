import React from "react";
import { Card } from "./Card";
import { styles } from "../styles/style";

const Body = () => {
  return (
    <main style={styles.body}>
      <Card name="Tania Medvid" position="Business analyst"/>

      <Card name="Sofiia Kuhivchak" position="Project manager" />
      <Card name="Vitaliy Kormylo" position="Frontend Developer" />
    </main>
  );
};

export default Body;
