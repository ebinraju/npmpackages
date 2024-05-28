/* eslint consistent-return: 0 */

import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Effect that runs only when deps are updated.
 * This will not run on mount, when the deps values are being assigned.
 */
export const useDidUpdateEffect = (fn, inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }
    didMountRef.current = true;
  }, inputs);
};

export const useResizeObserver = (ref) => {
  const [contentRect, setContentRect] = useState({});
  const [element, setElement] = useState(null);

  const resizeObserver = useMemo(() => {
    return new ResizeObserver((entries) => {
      if (entries[0]?.contentRect) {
        setContentRect(entries[0].contentRect);
      }
    });
  }, []);

  useEffect(() => {
    if (ref?.current) {
      resizeObserver.observe(ref.current);
      setElement(ref.current);
    }
    return () => {
      try {
        resizeObserver.unobserve(element);
      } catch (err) {
        // left blank on purpose
      }
    };
  }, [ref.current]);

  return contentRect;
};
