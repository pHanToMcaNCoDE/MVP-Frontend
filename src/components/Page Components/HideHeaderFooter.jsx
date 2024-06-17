import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideHeaderFooter = ({ children, HeaderComponent, FooterComponent }) => {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/sign-in" ||
      location.pathname === "/sign-up" ||
      location.pathname === "/sign-up/join" ||
      location.pathname === "/sign-up/step-1" ||
      location.pathname === "/sign-up/verify-email" ||
      location.pathname === "/sign-up/create-password" ||
      location.pathname === "/sign-up/identification" ||
      location.pathname === "/sign-up/organization" ||
      location.pathname === "/forgot-password" ||
      location.pathname === "/new-password" ||
      location.pathname === "/password-verification-check" ||
      location.pathname === "/success-verification"
    ) {
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
