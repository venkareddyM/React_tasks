import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [data, setData] = useState({
    name: '',
    password: ''
  });

  const [error, setError] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Basic validation
    let validationError = {}
    if (!data.name) {
      validationError.name = 'Name is required';
    }
    if (!data.password) {
      validationError.password = 'Password is required';
    }

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      console.log('Form has errors. Please fix them.');
    } else {
      console.log('Form submitted:', data);
      // Reset form fields after successful submission if needed
      setData({ name: '', password: '' });
      setError({ name: '', password: '' });
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleChange}
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
          />
          {error.password && <p className="error">{error.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;