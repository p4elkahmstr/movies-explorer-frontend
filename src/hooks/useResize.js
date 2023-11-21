import React, { useEffect } from "react";
const breakpointMobile = 768;

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
    if (width <= 480) {
      setScreen("mobile");
    } else if (width <= 768) {
      setScreen("tablet");
    } else {
      setScreen("full");
    }
  }, [width]);

  return {
    width,
    isMobile: width <= breakpointMobile,
    screen,
  };
};
