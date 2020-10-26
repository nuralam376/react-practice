import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Sumamry from "../Summary/Sumamry";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import {
  addIngredient,
  removeIngredient,
  updatePurchasable,
} from "../../../redux/actionCreators";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    ingredientPrices: state.ingredientPrices,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
    removeIngredient: (ingredient) => dispatch(removeIngredient(ingredient)),
    updatePurchasable: () => dispatch(updatePurchasable()),
  };
};

class BurgerBuilder extends Component {
  state = {
    modalOpen: false,
  };
  addIngredientHandle = (ingredient) => {
    this.props.addIngredient(ingredient);
    this.updatePurchasable();
  };

  removeIngredient = (ingredient) => {
    this.props.removeIngredient(ingredient);
    this.updatePurchasable();
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  updatePurchasable = () => {
    this.props.updatePurchasable();
  };

  handleCheckout = () => {
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.props.ingredients} />
          <Controls
            addIngredientHandle={this.addIngredientHandle}
            removeIngredient={this.removeIngredient}
            totalPrice={this.props.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.props.purchasable}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your order summary</ModalHeader>
          <ModalBody>
            <h5>Price : {this.props.totalPrice}</h5>
            <Sumamry ingredients={this.props.ingredients} />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
              Continue to checkout
            </Button>
            <Button color="danger" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
