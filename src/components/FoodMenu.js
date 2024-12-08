import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import riceAndCurry from '../assets/rice-and-curry.jpg';
import friedRice from '../assets/fried-rice.png';
import coffee from '../assets/coffee.jpg';
import shorties from '../assets/shorties.jpg';
import biscuit from '../assets/biscuit.jpg';
import murukku from '../assets/murukku.jpeg';
import softDrink from '../assets/soft-drink.jpg';
import waterBottle from '../assets/water-bottle.jpg';
import sup from '../assets/Sup.jpg';
import noodles from '../assets/Noodles.jpg';
import '../components/FoodMenu.css';

const FoodMenu = () => {
  const menuItems = [
    { id: 1, name: 'Rice and Curry', available: true, image: riceAndCurry, rating: 4, price: 250 },
    { id: 2, name: 'Fried Rice', available: false, image: friedRice, rating: 3, price: 500 },
    { id: 3, name: 'Coffee', available: true, image: coffee, rating: 5, price: 100 },
    { id: 4, name: 'Shorties', available: true, image: shorties, rating: 4, price: 90 },
    { id: 5, name: 'Biscuit', available: true, image: biscuit, rating: 4, price: 280 },
    { id: 6, name: 'Murukku', available: true, image: murukku, rating: 4, price: 100 },
    { id: 7, name: 'Soft Drink', available: true, image: softDrink, rating: 3, price: 170 },
    { id: 8, name: 'Water Bottle', available: true, image: waterBottle, rating: 5, price: 150 },
    { id: 9, name: 'Sup', available: true, image: sup, rating: 3, price: 80 },
    { id: 10, name: 'Noodles', available: true, image: noodles, rating: 4, price: 300 },
  ];

  const navigate = useNavigate();

  const handleOrderClick = (item) => {
    navigate('/order', { state: { item } });
  };

  return (
    <Container>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} sm={6} md={4} lg={3}>
            <Card className="mb-4 card-custom">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body className="card-body-custom">
                <Card.Title>{item.name}</Card.Title>
                <ReactStars
                  count={5}
                  value={item.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <Card.Text>Price: ${item.price}</Card.Text>
                <div className="button-group text-center">
                  <Button variant={item.available ? 'success' : 'danger'}>
                    {item.available ? 'Available' : 'Not Available'}
                  </Button>
                  {item.available && (
                    <Button variant="primary" onClick={() => handleOrderClick(item)}>
                      Order
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FoodMenu;
