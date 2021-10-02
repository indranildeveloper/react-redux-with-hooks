import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="text-center my-5">
        <h3>Number of Cakes {numberOfCakes}</h3>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => dispatch(buyCake())}
        >
          Buy Cake
        </Button>
      </div>
    </Container>
  );
};

export default HooksCakeContainer;
