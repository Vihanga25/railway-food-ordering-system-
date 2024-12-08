
import React, { useEffect, useState } from 'react';
import { Container, Table, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = 1; // Replace with dynamic user ID as needed
        const response = await axios.get(`http://localhost:5000/api/orders/${userId}`);
        console.log(response.data); // Log response data to check structure
        setOrders(response.data);
      } catch (err) {
        setError('Error fetching orders: ' + err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container className="my-orders-container">
      <h1>My Orders</h1>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          {error && <Alert variant="danger">{error}</Alert>}
          {orders.length === 0 ? (
            <Alert variant="info">No orders found</Alert>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Passenger Type</th>
                  <th>Train Class</th>
                  <th>Seat Side</th>
                  <th>Seat Number</th>
                  <th>Required Quantity</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.order_id}>
                    <td>{order.item_name}</td>
                    <td>{order.passenger_type}</td>
                    <td>{order.train_class}</td>
                    <td>{order.seat_side}</td>
                    <td>{order.seat_number}</td>
                    <td>{order.required_quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </>
      )}
    </Container>
  );
};

export default MyOrders;


