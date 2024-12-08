import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from '../axios';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      // Assuming response contains user data
      onLogin(response.data.user); // Pass user data to the parent component
      setError('');  // Clear any previous errors
    } catch (err) {
      setError(err.response?.data || 'Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <Container className="login-container">
        <h2 className="login-heading">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <div className="button-container">
            <Button variant="primary" type="submit" className="btn-primary">
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
