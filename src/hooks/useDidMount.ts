import { useState, useEffect } from "react";

export const useDidMount = () => {
  const [didMount, setDidMount] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 150 ? setDidMount(true) : setDidMount(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, [window.scrollY]);

  return didMount;
};
