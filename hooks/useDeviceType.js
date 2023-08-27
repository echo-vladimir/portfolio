import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, ms);
  };
}

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const determineDeviceType = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width < 1400) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    const debouncedDetermineDeviceType = debounce(determineDeviceType, 200);

    determineDeviceType();

    window.addEventListener("resize", debouncedDetermineDeviceType);

    return () => {
      window.removeEventListener("resize", debouncedDetermineDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
