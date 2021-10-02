import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { buyCake } from "../redux";

const NewCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  return (
    <Container>
      <div className="text-center my-5">
        <h3>Number of Cakes {numberOfCakes}</h3>
        <input
          type="text"
          value={number}
          className="form-control my-3"
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button
          variant="success"
          size="lg"
          onClick={() => dispatch(buyCake(number))}
        >
          Buy {number} Cakes
        </Button>
      </div>
    </Container>
  );
};

export default NewCakeContainer;
