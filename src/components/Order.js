import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios'; 
import './Order.css';

import placeOrderImg from '../assets/images/order-now.png';
import addToCartImg from '../assets/images/cart.png';

const foodItems = [
  { name: 'Rice and Curry', value: 'Rice and Curry' },
  { name: 'Fried Rice', value: 'Fried Rice' },
  { name: 'Coffee', value: 'Coffee' },
  { name: 'Shorties', value: 'Shorties' },
  { name: 'Biscuit', value: 'Biscuit' },
  { name: 'Murukku', value: 'Murukku' },
  { name: 'Soft Drink', value: 'Soft Drink' },
  { name: 'Water Bottle', value: 'Water Bottle' },
  { name: 'Sup', value: 'Sup' },
  { name: 'Noodles', value: 'Noodles' },
];

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item || {};
  const [selectedItem, setSelectedItem] = useState(item.name);
  const [passengerType, setPassengerType] = useState('');
  const [trainClass, setTrainClass] = useState('');
  const [seatSide, setSeatSide] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [requiredQuantity, setRequiredQuantity] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      userId: 1, 
      item_name: selectedItem,
      passenger_type: passengerType,
      train_class: trainClass,
      seat_side: seatSide,
      seat_number: seatNumber,
      required_quantity: requiredQuantity
    };

    console.log('Order Data:', orderData);

    axios.post('http://localhost:5000/api/orders', orderData)
      .then((response) => {
        console.log('Response:', response);
        setOrderPlaced(true);
        alert('Order placed successfully');
        navigate('/my-orders');
      })
      .catch((error) => {
        alert('Error placing order');
        console.error('There was an error placing the order!', error);
      });
  };

  const handleAddToCart = () => {
    const orderData = {
      item_name: selectedItem,
      required_quantity: requiredQuantity,
    };
    navigate('/add-to-cart', { state: { orderData } });
  };

  const handleCancelOrder = () => {
    navigate('/my-orders'); // Redirect to my orders or another page as needed
  };

  return (
    <Container>
      {orderPlaced && <Alert variant="success">Your Order Successfully</Alert>}
      <div className="form-wrapper">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formItemName">
            <Form.Label>Food Item</Form.Label>
            <Form.Select 
              value={selectedItem} 
              onChange={(e) => setSelectedItem(e.target.value)} 
              required
            >
              <option value="">Select Food Item</option>
              {foodItems.map(item => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formPassengerType">
            <Form.Label>Passenger Type</Form.Label>
            <Form.Select 
              value={passengerType} 
              onChange={(e) => setPassengerType(e.target.value)} 
              required
            >
              <option value="">Select Passenger Type</option>
              <option value="General Passenger">General Passenger</option>
              <option value="Warrant Passenger">Warrant Passenger</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formTrainClass">
            <Form.Label>Train Class</Form.Label>
            <Form.Select 
              value={trainClass} 
              onChange={(e) => setTrainClass(e.target.value)} 
              required
            >
              <option value="">Select train class</option>
              <option value="1st Class">1st Class</option>
              <option value="2nd Class">2nd Class</option>
              <option value="3rd Class">3rd Class</option>
              <option value="1st Class Air Conditioner">1st Class Air Conditioner</option>
              <option value="2nd Class Reservation">2nd Class Reservation</option>
              <option value="Sleeper Class">Sleeper Class</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formSeatSide">
            <Form.Label>Seat Side</Form.Label>
            <Form.Select 
              value={seatSide} 
              onChange={(e) => setSeatSide(e.target.value)} 
              required
            >
              <option value="">Select seat side</option>
              <option value="Left Side">Left Side</option>
              <option value="Right Side">Right Side</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formSeatNumber">
            <Form.Label>Seat Number</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter seat number" 
              value={seatNumber} 
              onChange={(e) => setSeatNumber(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formRequiredQuantity">
            <Form.Label>Required Quantity</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Required Quantity" 
              value={requiredQuantity} 
              onChange={(e) => setRequiredQuantity(e.target.value)} 
              required 
            />
          </Form.Group>

          <div className="button-group">
            <Button variant="primary" type="submit">
              <img src={placeOrderImg} alt="Place Order" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Place Order
            </Button>
            <Button variant="dark" type="button" onClick={handleAddToCart}>
              <img src={addToCartImg} alt="Add to Cart" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Add to Cart
            </Button>
            <Button variant="danger" type="button" onClick={handleCancelOrder}>
              Order Cancel
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Order;

