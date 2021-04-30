import React, { Component }  from 'react';
import { PayUnit } from "payunitjs";

export default class AddFunds extends Component {
  componentDidMount() {
    PayUnit(
      {
        apiUsername: "XXX",
        apiPassword: "xxx",
        x_api_key: "xxx",
        mode: "test",
      },
      {
        return_url: "http://127.0.0.1:3000",
        notify_url: " ",
        description: "Online payment with payunit",
        purchaseRef: "",
        total_amount: "200",
        name: "cabrel",
        currency: "XAF",
      }
    );
  }

  render() {
    return (
      <div>
        <button id="payunit-pay"> Pay with payunit </button>
      </div>
    )
  }
}