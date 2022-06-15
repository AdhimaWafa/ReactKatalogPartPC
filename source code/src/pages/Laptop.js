import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import zephryus from "../assets/images/laptop/asus rog zephyrus duo.png";
import strix from "../assets/images/laptop/laptop rog strix.png";
import tuf from "../assets/images/laptop/laptop tuf.png";
import "../style/Laptop.css";


function Laptop () {
    return (
        <div className="bgLaptop">
            <br/>
            <h1 className="text-light text-center judulkonten">LAPTOP</h1>
            <Container>
                <br/>
                <br/>
                <Row className="containerlaptop">
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={zephryus} alt="Zephyrus" className="LaptopImages2"/>
                            <Card.Title>ASUS ROG Zephyrus Duo</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={strix} alt="Strix" className="LaptopImages2"/>
                            <Card.Title>ASUS ROG Strix</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={tuf} alt="TUF" className="imagewrap3"/>
                            <Card.Title>ASUS ROG TUF</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
    }

export default Laptop