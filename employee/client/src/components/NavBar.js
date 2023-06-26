import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="nav">
        <ul type="none">
          <li>
            <a href="#" class="logo">
              <img src="../images/logo.png" />
            </a>
          </li>
          <li>
            <a href="/employee/list">
              <i class="fas fa-users"></i>
              <span class="nav-item">Employee list</span>
            </a>
          </li>
          <li>
            <a href="/employee/add">
              <i class="fas fa-users"></i>
              <span class="nav-item">Add Employee</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
