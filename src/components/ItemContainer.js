import React from "react";
import { connect } from "react-redux";
import { Button, Container } from "react-bootstrap";

import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  return (
    <Container>
      <h3>Item: {props.item}</h3>
      <Button variant="danger" onClick={props.buyItem}>
        Buy Items
      </Button>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

// If the mapStateToProps is missing or not in use
// export default connect(null, mapDispatchToProps)(ItemContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
