import { useEffect, useRef, useState } from 'react';

function useComponentSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  return { width: size.width, height: size.height, ref };
}

export default useComponentSize;
