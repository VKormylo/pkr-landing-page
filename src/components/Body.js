import React from "react";
import { Card } from "./Card";
import { styles } from "../styles/style";

const Body = () => {
  return (
    <main style={styles.body}>
      {/* Paste your card components here like this <Card name="..." position="..." /> */}
      <Card name="Vlad Kuryliv" position="QA Engineer" />
      <Card name="Kurman Vitalii" position="Software Engineer" />
      <Card name="Tania Medvid" position="Business analyst" />
      <Card name="Sofiia Kuhivchak" position="Project manager" />
      <Card name="Vitaliy Kormylo" position="Frontend Developer" />
    </main>
  );
};

export default Body;
