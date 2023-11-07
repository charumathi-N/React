import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PriceComponent.css' 

const Mainprice = (props1) => {
    //objct destructuring
    const {objects} = props1;
    const {price,content} = objects;
    const arr = Object.values(content);
    
    //variable and function declarations
    
    const parameters1 ={
        //Card width and height declared globally
        width: '20rem',
        height: '35rem',
    }
    const parameters2 ={
        //card width and height for header
        height: '8rem',
    }

  return (
    //JSX code
    <>
      <Card  style={{ width: parameters1.width , height: parameters1.height}} className="Card">
        <Card.Header style={{ height: parameters2.height}} className="CardHeader">
            <p id="Sub_Type">{price.Sub_type}</p>
            <p id="Rate">{price.Rate}</p>
        </Card.Header>
        <Card.Body className="CardBody">
          <Card.Text>
             {
              <div>
                {arr.map((item) => <li className="text">{item}</li>)}
              </div>
             }
          </Card.Text>
          <Button variant="primary" className="Select">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Mainprice;
