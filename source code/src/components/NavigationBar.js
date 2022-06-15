import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';
import "../style/landingpage.css"

function NavigationBar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    return (
        <div className="bg-dark">
            <Navbar variant="dark">
                <Container>
                    <Link className="judul text-light" to="/">CATALOG</Link>
                        <div className='p-2'>
                        <Link to='/laptop' className='text-light p-2'>LAPTOP</Link>
                        <Link to='/vga' className='text-light p-2'>VGA</Link>
                        <Link to='/motherboard' className='text-light p-2'>MOTHERBOARD</Link>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
    }

export default NavigationBar 
