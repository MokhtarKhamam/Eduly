import { useEffect, useState } from "react";

export function useScrollOffsetTop(offset: number = 100) {
  const [isOffset, setIsOffset] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOffset(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return { isOffset };
}
