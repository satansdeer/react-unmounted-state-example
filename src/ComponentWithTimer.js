import { useState, useEffect, useRef } from "react";

export const ComponentWithTimer = () => {
  const [count, setCount] = useState(0);
  const isMountedRef = useRef(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(isMountedRef.current){
        setCount((c) => c + 1);
      }
    }, 3000);
    return () => {
      isMountedRef.current = false;
      // clearTimeout(timeout)
    }
  }, []);

  return <p>Count: {count}</p>
};
