import GraphQLAPI, { GraphQLResult } from "@aws-amplify/api-graphql";
import { Auth, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable";

import {
  Speaker,
  ListSpeakersQuery,
  Talk,
  ListTalksQuery,
  Category,
  ListCategoriesQuery,
  CreateSpeakerInput,
  CreateSpeakerMutation,
  CreateTalkMutation,
  TalkSpeakers,
  CreateTalkSpeakersMutation,
  CreateTalkSpeakersInput,
  CreateTalkInput,
  ListTicketsQuery,
  Ticket,
  PurchaseTicketInput,
  PurchaseTicketMutation,
  RedeemTicketInput,
  RedeemTicketMutation,
  Message,
  ListMessagesQuery,
  CreateMessageInput,
  CreateMessageMutation,
  OnCreateMessageSubscription,
} from "../API";

import { listCategories, listMessages, listSpeakers, listTalks, listTickets } from "../graphql/queries";
import {
  createMessage,
  createSpeaker,
  createTalk,
  createTalkSpeakers,
  purchaseTicket,
  redeemTicket,
} from "../graphql/mutations";
import { onCreateMessage } from "../graphql/subscriptions";

function sorted<T extends { updatedAt: string }>(list: T[]): T[] {
  const sortedList = [...list];
  sortedList.sort((s1, s2) => {
    return s1.updatedAt < s2.updatedAt ? 1 : s1.updatedAt > s2.updatedAt ? -1 : 0;
  });
  return sortedList;
}

function runGraphQL<T>(queryOrMutation: string, variables?: Record<string, unknown>) {
  return GraphQLAPI.graphql(graphqlOperation(queryOrMutation, variables)) as Promise<GraphQLResult<T>>;
}

export async function getCategories(): Promise<Category[]> {
  const response = await runGraphQL<ListCategoriesQuery>(listCategories);
  return sorted(response?.data?.listCategories?.items) as Category[];
}

export async function getSpeakers(): Promise<Speaker[]> {
  const response = await runGraphQL<ListSpeakersQuery>(listSpeakers);
  return sorted(response?.data?.listSpeakers?.items) as Speaker[];
}

export async function getTalks(): Promise<Talk[]> {
  const response = await runGraphQL<ListTalksQuery>(listTalks);
  return sorted(response?.data?.listTalks?.items as Talk[]);
}

export async function getTickets(): Promise<Ticket[]> {
  const response = await runGraphQL<ListTicketsQuery>(listTickets);
  return sorted(response?.data?.listTickets?.items as Ticket[]);
}

export async function getMessages(): Promise<Message[]> {
  const response = await runGraphQL<ListMessagesQuery>(listMessages, { limit: 1000 });
  return sorted(response?.data?.listMessages?.items).reverse() as Message[];
}

export async function addSpeaker(speaker: CreateSpeakerInput): Promise<string> {
  const response = await runGraphQL<CreateSpeakerMutation>(createSpeaker, {
    input: speaker,
  });
  return response.data.createSpeaker.id;
}

export async function addTalk(talk: CreateTalkInput): Promise<string> {
  const response = await runGraphQL<CreateTalkMutation>(createTalk, {
    input: talk,
  });
  return response.data.createTalk.id;
}

export async function addSpeakerTalk(talkSpeaker: CreateTalkSpeakersInput): Promise<string> {
  const response = await runGraphQL<CreateTalkSpeakersMutation>(createTalkSpeakers, {
    input: talkSpeaker,
  });
  return response.data.createTalkSpeakers.id;
}

export async function addMessage(message: Omit<CreateMessageInput, "owner">): Promise<string> {
  const user = await Auth.currentAuthenticatedUser();

  const response = await runGraphQL<CreateMessageMutation>(createMessage, {
    input: { ...message, owner: user.username },
  });
  return response.data.createMessage.id;
}

export async function buyTicket(purchaseTicketInput: PurchaseTicketInput): Promise<string> {
  const response = await runGraphQL<PurchaseTicketMutation>(purchaseTicket, {
    input: purchaseTicketInput,
  });
  return response.data.purchaseTicket.ticketId;
}

export async function useTicket(redeemTicketInput: RedeemTicketInput): Promise<string> {
  const response = await runGraphQL<RedeemTicketMutation>(redeemTicket, {
    input: redeemTicketInput,
  });
  return response.data.redeemTicket.ticketId;
}

export function subscribeToMessages(callback: (message: Message) => void): ZenObservable.Subscription {
  const observable = GraphQLAPI.graphql(graphqlOperation(onCreateMessage)) as unknown as Observable<{
    value: GraphQLResult<OnCreateMessageSubscription>;
  }>;

  const subscription = observable.subscribe({
    next: (args) => callback(args.value.data.onCreateMessage),
    error: (error: Error) => console.warn("ERROR", error),
  });

  return subscription;
}
