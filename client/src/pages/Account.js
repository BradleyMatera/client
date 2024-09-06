import React from 'react';
import '../styles/Account.css';

function Account() {
  return (
    <div className="account">
      <h1>My Account</h1>
      <p>Manage your account details and view your order history.</p>
      <section className="account-details">
        <h2>Account Details</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </section>
      <section className="order-history">
        <h2>Order History</h2>
        <ul>
          <li>Order #1234 - $29.99</li>
          <li>Order #5678 - $49.99</li>
        </ul>
      </section>
    </div>
  );
}

export default Account;