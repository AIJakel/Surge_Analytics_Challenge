import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import propTypes from 'prop-types';
import './SalesOrder.scss';


/**
 * Handles computing the value of the order.
 */
class SalesOrder extends Component {
constructor(props) {
  super(props)
  this.state = {
    name: "",
    price: 0,
    quantity: 0
  }
  this.onNameChange = this.onNameChange.bind(this);
  this.onPriceChange = this.onPriceChange.bind(this);
  this.onQuantityChange = this.onQuantityChange.bind(this);
}

onNameChange(e) {
  this.setState({
    name: e.target.value
  });
}

onPriceChange(e) {
  const { updateTotal } = this.props;
  const { quantity } = this.state;
  
  updateTotal( e.target.value * quantity);
  this.setState({
    price: e.target.value
  });
}

onQuantityChange(e) {
  const { updateTotal } = this.props;
  const { price } = this.state;

  updateTotal( e.target.value * price);
  this.setState({
    quantity: e.target.value
  });
}

  render() {
    const { total } = this.props;
    const { name, price, quantity } = this.state;
    return (
      <div className="salesOrder">
      <h2 className="salesOrder_header">
        Sales Order Form
      </h2>
        <div className="salesOrder_input">
          <TextField
            onChange={this.onNameChange}
            value={name}
            helperText=" "
            variant="outlined"
            label="Product Name"
          />
        </div>
        <div className="salesOrder_input">
          <TextField
            value={price}
            onChange={this.onPriceChange}
            error={isNaN(price)}
            helperText={isNaN(price) ? "Please enter a number." : " "}
            variant="outlined"
            label="Price"
          />
        </div>
        <div className="salesOrder_input">
          <TextField
            value={quantity}
            onChange={this.onQuantityChange}
            error={isNaN(quantity)}
            helperText={isNaN(quantity) ? "Please enter a number." : " "}
            variant="outlined"
            label="Quantity"
          />
        </div>
        <div className="salesOrder_total">
          Total: $
          <span>
            {total.toFixed(2)}
          </span>
        </div>
      </div>
    );
  }
}

export default SalesOrder;

SalesOrder.propTypes = {
  updateTotal: propTypes.func.isRequired,
  total: propTypes.number.isRequired
};