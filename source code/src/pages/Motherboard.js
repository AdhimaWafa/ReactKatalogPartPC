import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import bempat from "../assets/images/mobo/b450 mobo.jpg";
import blima from "../assets/images/mobo/b550 gaming.png";
import xlima from "../assets/images/mobo/x570.png";
import "../style/Laptop.css";

function Motherboard() {
    return (
        <div className="bgLaptop">
            <br />
            <h1 className="text-light text-center judulkonten">MOTHERBOARD</h1>
            <Container>
                <br />
                <br />
                <Row className="containerlaptop">
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={xlima} alt="X570" className="imagewrap5"/>
                            <Card.Title>ROG X570</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={blima} alt="B550" className="imagewrap5"/>
                            <Card.Title>ROG B550</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={bempat} alt="B450" className="imagewrap5"/>
                            <Card.Title>ROG B450</Card.Title>
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

export default Motherboard