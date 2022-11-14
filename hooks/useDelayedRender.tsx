import { useState, useRef, useCallback } from "react";

type Options = {
  enterDelay?: number;
  exitDelay?: number;
  onUnmount?: () => void;
};

const useDelayedRender = (active: boolean = false, options: Options = {}) => {
  const [, force] = useState<any>();
  const mounted = useRef(active);
  const rendered = useRef(false);
  const renderTimer = useRef<NodeJS.Timeout | null>(null);
  const unmountTimer = useRef<NodeJS.Timeout | null>(null);
  const prevActive = useRef(active);

  const recalculate = useCallback(() => {
    const { enterDelay = 1, exitDelay = 0 } = options;

    if (prevActive.current) {
      mounted.current = true;
      if (unmountTimer.current) clearTimeout(unmountTimer.current);

      if (enterDelay <= 0) {
        rendered.current = true;
      } else {
        if (renderTimer.current) return;

        renderTimer.current = setTimeout(() => {
          rendered.current = true;
          renderTimer.current = null;
          force({});
        }, enterDelay);
      }
    } else {
      rendered.current = false;

      if (exitDelay <= 0) {
        mounted.current = false;
      } else {
        if (unmountTimer.current) return;

        unmountTimer.current = setTimeout(() => {
          mounted.current = false;
          unmountTimer.current = null;
          force({});
        }, exitDelay);
      }
    }
  }, [options]);

  if (active !== prevActive.current) {
    prevActive.current = active;
    recalculate();
  }

  return {
    mounted: mounted.current,
    rendered: rendered.current,
  };
};

export default useDelayedRender;
