import React, { useEffect } from "react";
const breakpointMobile = 768;

export const useResize = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isMobile: width <= breakpointMobile,
  };
};
