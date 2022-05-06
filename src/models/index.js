// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Speaker, Talk, Category, Ticket, Message, TalkSpeakers, PurchaseTicketResult, RedeemTicketResult } = initSchema(schema);

export {
  Speaker,
  Talk,
  Category,
  Ticket,
  Message,
  TalkSpeakers,
  PurchaseTicketResult,
  RedeemTicketResult
};