import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { buyIceCream } from "../redux";

const HooksIceCreamContainer = () => {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="text-center my-5">
        <h3>Number of Ice Creams {numberOfIceCreams}</h3>
        <Button
          variant="primary"
          size="lg"
          onClick={() => dispatch(buyIceCream())}
        >
          Buy Ice Cream
        </Button>
      </div>
    </Container>
  );
};

export default HooksIceCreamContainer;
