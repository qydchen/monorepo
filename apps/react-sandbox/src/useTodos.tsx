import { useEffect, useRef, useState } from "react";

function useTodoLoader<T>() {
  const [payload, setPayload] = useState<T[]>([]);
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timer.current = setTimeout(() => {
      let arr = [
        {
          id: 1,
          text: "1234",
          completed: true,
        },
        { id: 2, text: "5312", completed: false },
      ] as T[];
      setPayload(arr);
    }, 1000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
  return payload;
}

export default useTodoLoader;
