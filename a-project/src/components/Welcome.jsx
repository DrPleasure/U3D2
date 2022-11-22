import React from "react";

import Container from "react-bootstrap/Container";

function Welcome() {
  return (
    <>
      <Container>
        <h1>Welcome to</h1>
        <h2>The Library of Margaret Thatcher</h2>
        <img
          src="https://media.vogue.co.uk/photos/5d5488bd2a196c00087c1f5c/master/w_1600,c_limit/margaret-thatcher-briefcase-vogue-3nov15-rex_b.jpg"
          alt="cat"
        />
      </Container>
    </>
  );
}

export default Welcome;
