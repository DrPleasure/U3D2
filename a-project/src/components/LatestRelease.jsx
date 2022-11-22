// Home will be the component hosting the main features of the homepage
import { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import books from "../data/books/horror.json";

// every component written as a CLASS can hold an internal STATE.
// a state is an object, and you want to use it for REMEMBERING THINGS!
// basically an internal memory.
// a STATE OBJECT is a feature just belonging to CLASS COMPONENTS.
// the state keeps its memory from the moment the Home component reaches the DOM
// until the Home component disappears

class LatestRelease extends Component {
  // Component is the MAIN CLASS COMPONENT from the React Library
  // render() is the only MANDATORY METHOD in a Class Component!
  // its job is just to RETURN the JSX

  // state is a reserved keyword; you cannot call your state object "stefano" :(

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          {/* this is the same thing as writing <div className="col col-xs-12 col-md-6"> */}
          <Col xs={12} md={6} className="text-center">
            <h1>Welcome to the Library</h1>
            <h3>Check out the Latest Horrer Releases!</h3>
            <Carousel interval={1700}>
              {books.map((books) => (
                <Carousel.Item key={books.asin}>
                  <img
                    className="d-block w-100"
                    src={books.img}
                    alt={books.tite}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
