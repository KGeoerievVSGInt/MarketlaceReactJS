import { useEffect, useRef, useState } from "react";

export const useDropdownToggle = (initial: boolean) => {
  const [visible, setVisible] = useState(initial);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClicks = (e: any) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !buttonRef.current?.contains(e.target)
    ) {
      console.log(e.target);

      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClicks, true);
    return () => {
      document.removeEventListener("mousedown", handleClicks, true);
    };
  }, [ref, buttonRef]);
  return { visible, setVisible, ref, buttonRef };
};
