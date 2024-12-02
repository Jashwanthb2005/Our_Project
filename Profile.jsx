import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="Profile">
      <div className="card">
        <div className="image"></div>
        <div className="card-info">
          <span>George Johnson</span>
          <p>Support Specialist</p>
        </div>
        <div className="button-card">
          <a href="/" className="button-edit">
            Edit Profile
          </a>
          <a href="/" className="button-delete">
            Delete Account
          </a>
        
          <a href="/" className="button-logout">
            Logout
          </a>
        </div>
      </div>
      <div className="info">
      <div className="info">
  <div className="info-card">
    <h2>Upload History</h2>
    <ul>
      <li>
        <span>Document 1</span>
        <span className="upload-date">2024-12-01</span>
      </li>
      <li>
        <span>Image 2</span>
        <span className="upload-date">2024-12-01</span>
      </li>
      <li>
        <span>PDF Report</span>
        <span className="upload-date">2024-11-30</span>
      </li>
    </ul>
  </div>
</div>


      </div>
    </div>
  );
}

export default Profile;
