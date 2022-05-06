/* Amplify Params - DO NOT EDIT
	API_JSDAYEXAMPLEAPP_GRAPHQLAPIIDOUTPUT
	API_JSDAYEXAMPLEAPP_TICKETTABLE_ARN
	API_JSDAYEXAMPLEAPP_TICKETTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

function checkoutPayment(cardNumber, expirationDate, cvc) {
  console.log("Fake payment checkout", cardNumber, expirationDate, cvc);
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
}

async function createNewTicket(username) {
  const ticketId = uuidv4();
  const now = new Date().toISOString();

  await dynamodb
    .put({
      TableName: process.env.API_JSDAYEXAMPLEAPP_TICKETTABLE_NAME,
      Item: {
        id: ticketId,
        owner: username,
        redeemed: false,
        createdAt: now,
        updatedAt: now,
      },
    })
    .promise();

  return ticketId;
}

exports.handler = async (event) => {
  // Get username from lambda's identity
  const { username } = event.identity;

  // Get parameters from mutation's input
  const { cardNumber, expirationDate, cvc } = event.arguments.input;

  try {
    // Fake a payment checkout
    await checkoutPayment(cardNumber, expirationDate, cvc);

    // Create the ticket
    const ticketId = await createNewTicket(username);

    // Return the new ticket id
    return {
      __typename: "PurchaseTicketResult",
      ticketId,
    };
  } catch (error) {
    // Return empty ticket in an error occurred
    return {
      __typename: "PurchaseTicketResult",
      ticketId: null,
    };
  }
};
