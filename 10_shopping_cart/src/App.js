import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import BuyPage from "./components/BuyPage";

import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Cart from "./components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addIncart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      // in false case returns the -1
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("Already added in cart", { type: "error" });
      return;
    }
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid className="body">
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addIncart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
