import React from 'react';
import styles from '../styles/Profile.module.css'; // Create this CSS file for styling

function Profile() {
  return (
    <div className={styles.profile}>
      <h1>Your Profile</h1>
      <p>Welcome to your profile page!</p>
      {/* Add more profile-related content here */}
    </div>
  );
}

export default Profile;