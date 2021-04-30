# Running the App

```
git clone https://github.com/tsaffi/payunit-issue.git

cd payunit-issue

npm install

npm start
```

## The issue

<img src="..public/screenshot.png">

When clicked on the Finance link, the Finance component is rendered and it shows the `Pay with payunit` button. But this button, when clicked on, does not load/display payunit payment modal, nor display an error message on the browser console.

But if this url (http://localhost:3001/finance) is reloaded, the `Pay with payunit` button will show the payunit payment modal.

I will like to know what might be causing this, whether it is due to my application structure or I am not using it the right way.

Also, when I load the PayUnit component below in componentDidMount, with displaying the attribute id="payunit-pay" in the render method, I get the error `Cannot read property 'addEventListener' of null` in the console. This is probably due to a javascript concept I don't have an understanding of. I will appreciate a little explanation on what is causing this or on how event listeners work in javascript.

```
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
    )
```