import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-body-tertiary text-center text-lg-start">
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <Link
          class="text-body text-decoration-none"
          to="https://github.com/Denwer11"
        >
          © 2024 Copyright: Даша
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
