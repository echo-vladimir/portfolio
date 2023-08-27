import React, { useState } from "react";
import useAnimation from "./useAnimation";

export default function ModifyEffect({
  from: userString,
  to: nextUserString,
  speed,
}) {
  const [string, setString] = useState("");

  const getRandNum = () => Math.floor(Math.random() * 9);
  const getStep = (string, progress) => Math.ceil(string.length * progress);

  const modify = (string, nextString, index, replacement) => {
    const output =
      nextString.substr(0, index) +
      replacement +
      string.substr(index, string.length);
    return nextString.length !== index ? output : nextString;
  };

  useAnimation(
    "quad",
    speed,
    (progress) => {
      const step = getStep(nextUserString, progress);
      const output = modify(userString, nextUserString, step, getRandNum());
      setString(output);
    },
    string
  );

  return <div dangerouslySetInnerHTML={{ __html: string }} />;
}
