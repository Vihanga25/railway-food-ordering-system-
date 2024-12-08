// src/components/SignUp.js
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from '../axios';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { name, email, password });
      setSuccess('Sign up successful! Please log in.');
      setError('');  // Clear any previous errors
    } catch (err) {
      setError(err.response?.data || 'Error signing up, please try again');
      setSuccess('');  // Clear any previous success messages
    }
  };

  return (
    <Container className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit} className="signup-form">
        <Form.Group controlId="formName" className="form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
        </Form.Group>
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
        <Form.Group controlId="formConfirmPassword" className="form-group">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="form-control"
          />
        </Form.Group>
        <div className="button-container">
          <Button variant="primary" type="submit" className="btn-primary">
            Sign Up
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;


