import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Row, Col } from "react-bootstrap";



function HomeListingCard({ listing }) {
  // const [index, setIndex] = useState(0)
  const {id, name, image, price} = listing

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
  
    <Carousel fade>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a0.muscache.com/im/pictures/c7345789-a686-4bfd-a17b-41767f5bb054.jpg?im_w=1200"
        alt="First slide"
      />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a0.muscache.com/im/pictures/eae83540-64c0-48e9-bd99-16d7330a2299.jpg?im_w=1440"
        alt="Second slide"
      />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/7b9674c0-43fd-4a8b-b95e-5b40b2b32b45.jpeg?im_w=1200"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>

		
  )
}

export default HomeListingCard;


// <Row className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    //   <Col>
    //   <Card>
    //     <Card.Header>{name}</Card.Header>
    //     <Carousel interval={1000000}>
    //       <Carousel.Item>
    //       <Card.Img variant="top" src={image} alt={name}/>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //       <Card.Img variant="top" src={image} alt={name}/>
    //       </Carousel.Item>
    //     </Carousel>
    //     <Card.Text>${price} / night</Card.Text>
    //   </Card>
    //   </Col>
      
		// </Row>