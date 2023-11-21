import React, { useEffect } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../utils/constants";

export const useResize = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [screen, setScreen] = React.useState("full");

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (width <= MOBILE_BREAKPOINT) {
      setScreen("mobile");
    } else if (width <= TABLET_BREAKPOINT) {
      setScreen("tablet");
    } else {
      setScreen("full");
    }
  }, [width]);

  return {
    width,
    screen,
  };
};
