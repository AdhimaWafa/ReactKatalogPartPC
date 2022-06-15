import { Card, Container, Row, Col, Image } from "react-bootstrap";
import zephryus from "../assets/images/laptop/asus rog zephyrus duo.png";
import strix from "../assets/images/laptop/laptop rog strix.png";
import tuf from "../assets/images/laptop/laptop tuf.png";
import tujuhpuluh from "../assets/images/vga/3070 rog.jpg";
import limaenam from "../assets/images/vga/9356-front.jpg";
import sembilanpuluh from "../assets/images/vga/rog 3090 ti.png";
import bempat from "../assets/images/mobo/b450 mobo.jpg";
import blima from "../assets/images/mobo/b550 gaming.png";
import xlima from "../assets/images/mobo/x570.png";

const Konten = () => {
    return (
        <div className="content">
            <div className="myBG">

            </div>
            <Container>
                <br/>
                <h1 className="text-light text-center">LAPTOP</h1>
                <br/>
                <Row className="containerlaptop">
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={zephryus} alt="Zephyrus" className="LaptopImages"/>
                            <Card.Title>ASUS ROG Zephyrus Duo</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={strix} alt="Strix" className="LaptopImages"/>
                            <Card.Title>ASUS ROG Strix</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={tuf} alt="TUF" className="imagewrap"/>
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

            <Container>
                <br/>
                <h1 className="text-light text-center">VGA</h1>
                <br/>
                <Row className="containerlaptop">
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={sembilanpuluh} alt="3090rog" className="LaptopImages"/>
                            <Card.Title>RTX 3090 Ti</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={tujuhpuluh} alt="3070rog" className="imagewrap"/>
                            <Card.Title>RTX 3070</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={limaenam} alt="9356rog" className="imagewrap2"/>
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

            <Container>
                <br/>
                <h1 className="text-light text-center">MOTHERBOARD</h1>
                <br/>
                <Row className="containerlaptop">
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={xlima} alt="X570" className="imagewrap"/>
                            <Card.Title>ROG X570</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={blima} alt="B550" className="imagewrap"/>
                            <Card.Title>ROG B550</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-light text-dark text-center LaptopImages">
                            <Image src={bempat} alt="B450" className="imagewrap"/>
                            <Card.Title>ROG B450</Card.Title>
                            <div className="textbox">
                            <Card.Text className="textmargin">
                                Deskripsi ...
                            </Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <br/>
            </Container>
            
        </div>
    )
}

export default Konten