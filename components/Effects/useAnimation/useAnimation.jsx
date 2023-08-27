import { useState, useEffect, useRef, useCallback } from "react";
import animations from "./animations";

// Fix for >14.x.x. version of the NodeJS
global.performance = global.performance || {
  now: () => new Date().getTime(),
};

export default function useAnimation(type, duration, draw, deps, mode) {
  const init = useRef(performance.now());
  const index = useRef(0);
  const frame = useRef();

  const animation = animations[type];

  const debug = (mode) => (props) =>
    mode === "debug"
      ? console.table({
          ...props,
        })
      : null;

  const render = useCallback(
    (time) => {
      let tracing = debug(mode);
      let timePassed = time - init.current;
      let timer = timePassed / duration;

      if (timer > 1) timer = 1;

      let progress = animation(timer);

      tracing({
        type,
        rerender: ++index.current,
        seconds: Math.round(timePassed / 1000),
        progress,
      });

      draw(progress);

      if (timer < 1) frame.current = requestAnimationFrame(render);
    },
    [animation, draw, duration, mode, type]
  );

  const play = () => (frame.current = requestAnimationFrame(render));
  const stop = () => cancelAnimationFrame(frame.current);

  useEffect(() => {
    frame.current = requestAnimationFrame(render);
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  return {
    play,
    stop,
  };
}
