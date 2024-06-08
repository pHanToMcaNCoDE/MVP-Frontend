import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideHeaderFooter = ({ children, HeaderComponent, FooterComponent }) => {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
      setShowHeaderFooter(false);
    } else {
      setShowHeaderFooter(true);
    }
  }, [location]);

  return (
    <>
      {showHeaderFooter && <HeaderComponent />}
      <div>{children}</div>
      {showHeaderFooter && <FooterComponent />}
    </>
  );
};

export default HideHeaderFooter;