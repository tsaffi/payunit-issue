import React , {Component}  from 'react'
import { PayUnit } from "payunitjs"

export default class Payunit2 extends Component {
  componentDidMount() {
    PayUnit(
      {
        apiUsername: "payunit_sand_j90MNBbyJ",
        apiPassword: "2dbc1fcf-89a0-4846-b5b0-29843207e68d",
        x_api_key: "65a31fb3988bfc05fb5619f1395623d753079ef6",
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
        <button id="payunit-pay"> Pay  with payunit </button>
      </div>
    )
  }
}