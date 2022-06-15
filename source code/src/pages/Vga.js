import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import tujuhpuluh from "../assets/images/vga/3070 rog.jpg";
import limaenam from "../assets/images/vga/9356-front.jpg";
import sembilanpuluh from "../assets/images/vga/rog 3090 ti.png";
import "../style/Laptop.css";

function Vga() {
    return (
        <div className="bgLaptop">
            <br />
            <h1 className="text-light text-center judulkonten">VGA</h1>
            <Container>
                <br />
                <br />
                <Row className="containerlaptop">
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={sembilanpuluh} alt="3090rog" className="LaptopImages2"/>
                            <Card.Title>RTX 3090 Ti</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={tujuhpuluh} alt="3070rog" className="imagewrap3"/>
                            <Card.Title>RTX 3070</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages2">
                            <Image src={limaenam} alt="9356rog" className="imagewrap4"/>
                            <Card.Title>RTX 3050</Card.Title>
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

export default Vga