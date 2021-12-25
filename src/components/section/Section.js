import React from 'react';
import "./section.css";
import Carousel from "react-bootstrap/Carousel"
import crud from "../../assets/crud.png";
import music from "../../assets/musicpage.png"
import narr from "../../assets/narrador.png"
import port from "../../assets/port.png"

const Section = () => {
    return (
        <div id='portfolio' className='section'>
<h2>My repositories!</h2>

<Carousel className='carousel' fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={music}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
    <br></br>
    <i class="fab fa-github"><a target="_blank" href='https://github.com/agusoteras/musicaWeb'>Check the code!</a></i>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={crud}
      alt="Second slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
    <br></br>
    <i class="fab fa-github"><a target="_blank" href='https://github.com/agusoteras/CRUD---Lista-de-invitados'>Check the code!</a></i>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={narr}
      alt="Third slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
    <br></br>
    <i class="fab fa-github"><a target="_blank" href='https://github.com/agusoteras/Narrador'>Check the code!</a></i>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={port}
      alt="Four slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
    <br></br>
    <i class="fab fa-github"><a target="_blank" href='https://github.com/agusoteras/portfolio'>Check the code!</a></i>
  </Carousel.Item>
 

</Carousel>


        </div>
    )
}

export default Section
