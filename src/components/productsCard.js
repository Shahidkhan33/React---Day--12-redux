import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function ProductCard({ data,handleCart }) {
    const [btnText,setBtnText]=useState("Add to Cart")
    
    return (
        <Col xs={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: '23rem' }} className='shadow'>
                <Card.Img style={{ maxWidth: "366px", maxHeight: "306px",minHeight:"306px", objectFit: "contain" }} variant="top" src={data.images[0]} />
                    <Card.Body className='cardbody' style={{width:"338px",height:"194px"}}>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text style={{fontSize:"15px",fontWeight:"lighter"}}>
                            {data.description}
                        </Card.Text>
                        <Card.Text>${data.price}</Card.Text>
                    </Card.Body>
                <div className='card-footer border-top-0 cardbody'><Button  onClick={(event) => handleCart(event,data,btnText,setBtnText)}  variant="primary">{btnText}</Button></div>
            </Card>
        </Col>
    )
}