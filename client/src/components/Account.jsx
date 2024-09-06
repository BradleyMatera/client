import React from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link'; // Import Link from next/link

function Account() {
  return (
    <div className={styles.account}>
      <h1>Your Account</h1>
      <p>Manage your account settings and preferences.</p>
      <div className={styles.accountDetails}>
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
        <label>Password</label>
        <input type="password" placeholder="Your Password" />
        <Link href="/profile">
          <button className="fakeLoginButton">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Account;