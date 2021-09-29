import React from "react";
import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div class="aside">
      <a class="itemAside">
        <i class="bx bxs-home"></i>
        Home
      </a>
      <a class="itemAside">
        <i class="bx bx-user"></i>
        About Us
      </a>
      <a class="itemAside">
        <i class="bx bxs-server"></i>
        Services
      </a>
    </div>
  );
};

export default SideNavbar;
