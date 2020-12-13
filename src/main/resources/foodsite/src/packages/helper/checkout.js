export function placeOrder(amount){


  


    // var paypal = require('paypal-rest-sdk');
    
    // paypal.configure({
    //   'mode': 'sandbox',
    //   'client_id': 'Acjjlnvu2fsncrnohwk9xYqHUe47okJBQDEvdlPVshLhdenSfWUYZ1xDp2ZTmOIuwcuY06aavGxhwflp',
    //   'client_secret': 'EMLyieONgL0qthsBOgUso0D785SHdyYV39ZwUVI0XxlD9ZRXmPIrg7z4CClnuabkmQjRhlkaTlA1Gp6O'
    // });
    // debugger
    // paypal.Buttons({
    //   createOrder: function(data, actions) {
    //     return actions.order.create({
    //       purchase_units: [{
    //         amount: {
    //           value: amount
    //         }
    //       }]
    //     });
    //   },
    //   onApprove: function(data, actions) {
    //     return actions.order.capture().then(function(details) {
    //       alert('Transaction completed by ' + details.payer.name.given_name);
    //       // Call your server to save the transaction
    //       return fetch('/paypal-transaction-complete', {
    //         method: 'post',
    //         headers: {
    //           'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           orderID: data.orderID
    //         })
    //       });
    //     });
    //   }
    // }).render('#order');

}