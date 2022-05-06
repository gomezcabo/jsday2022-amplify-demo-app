import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class PurchaseTicketResult {
  readonly ticketId?: string | null;
  constructor(init: ModelInit<PurchaseTicketResult>);
}

export declare class RedeemTicketResult {
  readonly ticketId?: string | null;
  constructor(init: ModelInit<RedeemTicketResult>);
}

type SpeakerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TalkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TalkSpeakersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Speaker {
  readonly id: string;
  readonly name: string;
  readonly bio?: string | null;
  readonly talks?: (TalkSpeakers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Speaker, SpeakerMetaData>);
  static copyOf(source: Speaker, mutator: (draft: MutableModel<Speaker, SpeakerMetaData>) => MutableModel<Speaker, SpeakerMetaData> | void): Speaker;
}

export declare class Talk {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly category?: Category | null;
  readonly speakers?: (TalkSpeakers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly talkCategoryId?: string | null;
  constructor(init: ModelInit<Talk, TalkMetaData>);
  static copyOf(source: Talk, mutator: (draft: MutableModel<Talk, TalkMetaData>) => MutableModel<Talk, TalkMetaData> | void): Talk;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Ticket {
  readonly id: string;
  readonly owner: string;
  readonly redeemed: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ticket, TicketMetaData>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket, TicketMetaData>) => MutableModel<Ticket, TicketMetaData> | void): Ticket;
}

export declare class Message {
  readonly id: string;
  readonly message: string;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class TalkSpeakers {
  readonly id: string;
  readonly speaker: Speaker;
  readonly talk: Talk;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TalkSpeakers, TalkSpeakersMetaData>);
  static copyOf(source: TalkSpeakers, mutator: (draft: MutableModel<TalkSpeakers, TalkSpeakersMetaData>) => MutableModel<TalkSpeakers, TalkSpeakersMetaData> | void): TalkSpeakers;
}