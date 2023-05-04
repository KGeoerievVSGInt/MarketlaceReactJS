import { useEffect, useRef, useState } from "react";
type Callback = () => void;
export const useModalToggle = (closeFunction: Callback) => {
  const [modalClassName, setModalClassName] = useState("");
  const [backdropClassName, setBackdropClassName] = useState("");
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeAnimationHandler = () => {
    setModalClassName("modal-out");
    setBackdropClassName("out");
  };
  const handleOutliseClicks = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target))
      closeAnimationHandler();
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutliseClicks, true);
    if (backdropClassName != "") {
      backdropRef.current?.addEventListener("animationend", closeFunction);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutliseClicks, true);
    };
  }, [backdropClassName]);

  return {
    modalClassName,
    backdropClassName,
    closeAnimationHandler,
    backdropRef,
    modalRef,
  };
};
