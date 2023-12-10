import React from 'react';
import "../App.css";

export default function ButtonAppBar() {
  return (
    <div class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <div class="nav-title">
        MOHAMED ELMI
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="nav-links">
      <a href="#" target="_blank">PROJECTS</a>
      <a href="#" target="_blank">HOME</a>

    </div>
  </div>
  );
}