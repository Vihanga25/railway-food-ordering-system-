import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, Container, Alert } from 'react-bootstrap';
import './AddtoCart.css';

const AddToCart = () => {
  const location = useLocation();
  const orderData = location.state?.orderData || {};
  const [message, setMessage] = useState('');

  const handlePickUp = () => {
    setMessage('Successful save your Order');
  };

  const handleCancel = () => {
    setMessage('Your Order Cancelled');
  };

  return (
    <Container className="add-to-cart-container">
      <Card className="order-card">
        <Card.Body>
          <Card.Title className="order-title">This is Your Order</Card.Title>
          <hr />
          {orderData.item_name ? (
            <Card.Text className="order-details">
              <p><strong>Food Item -</strong> {orderData.item_name}</p>
              <p><strong>Quantity -</strong> {orderData.required_quantity}</p>
            </Card.Text>
          ) : (
            <p>No item added to cart.</p>
          )}
          <div className="button-group">
            <Button variant="primary" className="mr-2" onClick={handlePickUp}>Pick Up</Button>
            <Button variant="danger" onClick={handleCancel}>Cancel</Button>
          </div>
          {message && <Alert className="mt-3">{message}</Alert>}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddToCart;



