/* Amplify Params - DO NOT EDIT
	API_JSDAYEXAMPLEAPP_GRAPHQLAPIIDOUTPUT
	API_JSDAYEXAMPLEAPP_TICKETTABLE_ARN
	API_JSDAYEXAMPLEAPP_TICKETTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getTicket(ticketId) {
  const params = {
    Key: { id: ticketId },
    TableName: process.env.API_JSDAYEXAMPLEAPP_TICKETTABLE_NAME,
  };
  const ticket = await dynamodb.get(params).promise();
  return ticket.Item;
}

async function redeemTicket(username, ticketId) {
  const ticket = await getTicket(ticketId);

  await dynamodb
    .put({
      TableName: process.env.API_JSDAYEXAMPLEAPP_TICKETTABLE_NAME,
      Item: {
        id: ticketId,
        redeemed: true,
        owner: username,
        createdAt: ticket.createdAt,
        updatedAt: new Date().toISOString(),
      },
    })
    .promise();

  return ticketId;
}

exports.handler = async (event) => {
  try {
    const { username } = event.identity;
    const { ticketId } = event.arguments.input;
    await redeemTicket(username, ticketId);
    return {
      __typename: "RedeemTicketResult",
      ticketId,
    };
  } catch (error) {
    return {
      __typename: "RedeemTicketResult",
      ticketId: null,
    };
  }
};
