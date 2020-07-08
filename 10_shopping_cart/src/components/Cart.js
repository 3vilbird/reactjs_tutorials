import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardBody,
  CardHeader,
  Card,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((element) => {
    amount = parseFloat(amount) + parseFloat(element.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">your cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>price :- {item.productPrice} </span>
                <Button
                  color="danger"
                  onClick={() => {
                    removeItem(item);
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>

      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3 ">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            your amount for {cartItem.length} is {amount}
          </CardBody>
          <CardFooter>
            {" "}
            <Button color="success" onClick={buyNow}>
              Pay here{" "}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is empty</h1>
      )}
    </Container>
  );
};

export default Cart;
