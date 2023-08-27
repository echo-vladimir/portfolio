import React, { useState } from "react";
import useAnimation from "./useAnimation";

import styles from "./index.module.scss";

export default function GenerateEffect({ string: userString, speed }) {
  const [string, setString] = useState("");

  const getRandNum = () => Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  const getIndex = (string, progress) => Math.ceil(string.length * progress);

  const generate = (string, index, replacement) => {
    const outputStr = string.substr(0, index) + replacement;
    return string.length !== index ? outputStr : string;
  };

  useAnimation(
    "quad",
    speed,
    (progress) => {
      const index = getIndex(userString, progress);
      const outputStr = generate(userString, index, getRandNum());
      setString(outputStr);
    },
    string
  );

  return (
    <div
      className={styles.carriage}
      dangerouslySetInnerHTML={{ __html: string }}
    />
  );
}
