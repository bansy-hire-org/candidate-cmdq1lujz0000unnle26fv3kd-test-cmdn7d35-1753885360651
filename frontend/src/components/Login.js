import React, { useState } from 'react';

function Login({ setUser }) {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate OTP verification.  In real life, this would call an API.
    if (otp === '123456') {
      setUser({ username: 'testuser' });
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>OTP:</label>
      <input type="text" value={otp} onChange={e => setOtp(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;