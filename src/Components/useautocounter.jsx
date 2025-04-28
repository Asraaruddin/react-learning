import { useState, useEffect } from "react";

export function useAutoCounter(start = 0, delay = 1000) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, delay);

    // Cleanup interval when component unmounts
    return () => clearInterval(timer);
  }, [delay]);

  return count;
}
