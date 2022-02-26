Client Side

The Transcations component load a Transaction component for each  transactions. 

Each Transaction component display the relevant data as well as a delete transaction button/icon.

The App component (before rendering Transactions) display the total Balance - i.e. the sum of the data’s amounts.

Next, the Operations component have three inputs:

Amount

Vendor

Category

Under these inputs there two buttons:
Deposit

Withdraw

Pressing the Deposit button push a transcation into user transactions array with a positive value in the amount field.

Pressing the Withdraw button should push a transcation into user transactions array with a negative value in the amount field.

*the user is simply inserting a number - they do not need to write out whether it is positive or negative.

Finally, pressing the delete button in a transaction delete that transaction from user transactions array.

Server side

there are three routes in server:

/transactions - a GET route that returns all of the transaction documents

/transaction - a POST route that saves a single transaction into user DB

/transaction - a DELETE route that deletes a single transaction in user DB
