import React, { useState } from "react";
import useAnimation from "./useAnimation";
import styles from "./index.module.scss";

export default function TypingEffect({ string: userString, speed }) {
  const [string, setString] = useState("");

  const getIndex = (str, progress) => Math.ceil(str.length * progress);

  const type = (string, index) =>
    string.substring(0, index).split("\n").join("<br/>");

  useAnimation(
    "quad",
    speed,
    (progress) => {
      const index = getIndex(userString, progress);
      const outputStr = type(userString, index);
      setString(outputStr);
    },
    [string]
  );

  return (
    <div
      className={styles.carriage}
      dangerouslySetInnerHTML={{ __html: string }}
    />
  );
}
