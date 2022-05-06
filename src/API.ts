/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PurchaseTicketInput = {
  cardNumber: string,
  expirationDate: string,
  cvc: string,
};

export type PurchaseTicketResult = {
  __typename: "PurchaseTicketResult",
  ticketId?: string | null,
};

export type RedeemTicketInput = {
  ticketId: string,
};

export type RedeemTicketResult = {
  __typename: "RedeemTicketResult",
  ticketId?: string | null,
};

export type CreateSpeakerInput = {
  id?: string | null,
  name: string,
  bio?: string | null,
};

export type ModelSpeakerConditionInput = {
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelSpeakerConditionInput | null > | null,
  or?: Array< ModelSpeakerConditionInput | null > | null,
  not?: ModelSpeakerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Speaker = {
  __typename: "Speaker",
  id: string,
  name: string,
  bio?: string | null,
  talks?: ModelTalkSpeakersConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTalkSpeakersConnection = {
  __typename: "ModelTalkSpeakersConnection",
  items:  Array<TalkSpeakers | null >,
  nextToken?: string | null,
};

export type TalkSpeakers = {
  __typename: "TalkSpeakers",
  id: string,
  speakerID: string,
  talkID: string,
  speaker: Speaker,
  talk: Talk,
  createdAt: string,
  updatedAt: string,
};

export type Talk = {
  __typename: "Talk",
  id: string,
  name: string,
  description: string,
  category?: Category | null,
  speakers?: ModelTalkSpeakersConnection | null,
  createdAt: string,
  updatedAt: string,
  talkCategoryId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSpeakerInput = {
  id: string,
  name?: string | null,
  bio?: string | null,
};

export type DeleteSpeakerInput = {
  id: string,
};

export type CreateTalkInput = {
  id?: string | null,
  name: string,
  description: string,
  talkCategoryId?: string | null,
};

export type ModelTalkConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTalkConditionInput | null > | null,
  or?: Array< ModelTalkConditionInput | null > | null,
  not?: ModelTalkConditionInput | null,
  talkCategoryId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTalkInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  talkCategoryId?: string | null,
};

export type DeleteTalkInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateTicketInput = {
  id?: string | null,
  owner: string,
  redeemed: boolean,
};

export type ModelTicketConditionInput = {
  owner?: ModelStringInput | null,
  redeemed?: ModelBooleanInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Ticket = {
  __typename: "Ticket",
  id: string,
  owner: string,
  redeemed: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTicketInput = {
  id: string,
  owner?: string | null,
  redeemed?: boolean | null,
};

export type DeleteTicketInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  message: string,
  owner: string,
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  message: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  message?: string | null,
  owner?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateTalkSpeakersInput = {
  id?: string | null,
  speakerID: string,
  talkID: string,
};

export type ModelTalkSpeakersConditionInput = {
  speakerID?: ModelIDInput | null,
  talkID?: ModelIDInput | null,
  and?: Array< ModelTalkSpeakersConditionInput | null > | null,
  or?: Array< ModelTalkSpeakersConditionInput | null > | null,
  not?: ModelTalkSpeakersConditionInput | null,
};

export type UpdateTalkSpeakersInput = {
  id: string,
  speakerID?: string | null,
  talkID?: string | null,
};

export type DeleteTalkSpeakersInput = {
  id: string,
};

export type ModelSpeakerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelSpeakerFilterInput | null > | null,
  or?: Array< ModelSpeakerFilterInput | null > | null,
  not?: ModelSpeakerFilterInput | null,
};

export type ModelSpeakerConnection = {
  __typename: "ModelSpeakerConnection",
  items:  Array<Speaker | null >,
  nextToken?: string | null,
};

export type ModelTalkFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTalkFilterInput | null > | null,
  or?: Array< ModelTalkFilterInput | null > | null,
  not?: ModelTalkFilterInput | null,
  talkCategoryId?: ModelIDInput | null,
};

export type ModelTalkConnection = {
  __typename: "ModelTalkConnection",
  items:  Array<Talk | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelTicketFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  redeemed?: ModelBooleanInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelTalkSpeakersFilterInput = {
  id?: ModelIDInput | null,
  speakerID?: ModelIDInput | null,
  talkID?: ModelIDInput | null,
  and?: Array< ModelTalkSpeakersFilterInput | null > | null,
  or?: Array< ModelTalkSpeakersFilterInput | null > | null,
  not?: ModelTalkSpeakersFilterInput | null,
};

export type PurchaseTicketMutationVariables = {
  input?: PurchaseTicketInput | null,
};

export type PurchaseTicketMutation = {
  purchaseTicket?:  {
    __typename: "PurchaseTicketResult",
    ticketId?: string | null,
  } | null,
};

export type RedeemTicketMutationVariables = {
  input?: RedeemTicketInput | null,
};

export type RedeemTicketMutation = {
  redeemTicket?:  {
    __typename: "RedeemTicketResult",
    ticketId?: string | null,
  } | null,
};

export type CreateSpeakerMutationVariables = {
  input: CreateSpeakerInput,
  condition?: ModelSpeakerConditionInput | null,
};

export type CreateSpeakerMutation = {
  createSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    bio?: string | null,
    talks?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpeakerMutationVariables = {
  input: UpdateSpeakerInput,
  condition?: ModelSpeakerConditionInput | null,
};

export type UpdateSpeakerMutation = {
  updateSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    bio?: string | null,
    talks?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpeakerMutationVariables = {
  input: DeleteSpeakerInput,
  condition?: ModelSpeakerConditionInput | null,
};

export type DeleteSpeakerMutation = {
  deleteSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    bio?: string | null,
    talks?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTalkMutationVariables = {
  input: CreateTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type CreateTalkMutation = {
  createTalk?:  {
    __typename: "Talk",
    id: string,
    name: string,
    description: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    speakers?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    talkCategoryId?: string | null,
  } | null,
};

export type UpdateTalkMutationVariables = {
  input: UpdateTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type UpdateTalkMutation = {
  updateTalk?:  {
    __typename: "Talk",
    id: string,
    name: string,
    description: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    speakers?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    talkCategoryId?: string | null,
  } | null,
};

export type DeleteTalkMutationVariables = {
  input: DeleteTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type DeleteTalkMutation = {
  deleteTalk?:  {
    __typename: "Talk",
    id: string,
    name: string,
    description: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    speakers?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    talkCategoryId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    id: string,
    owner: string,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    id: string,
    owner: string,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    id: string,
    owner: string,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTalkSpeakersMutationVariables = {
  input: CreateTalkSpeakersInput,
  condition?: ModelTalkSpeakersConditionInput | null,
};

export type CreateTalkSpeakersMutation = {
  createTalkSpeakers?:  {
    __typename: "TalkSpeakers",
    id: string,
    speakerID: string,
    talkID: string,
    speaker:  {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTalkSpeakersMutationVariables = {
  input: UpdateTalkSpeakersInput,
  condition?: ModelTalkSpeakersConditionInput | null,
};

export type UpdateTalkSpeakersMutation = {
  updateTalkSpeakers?:  {
    __typename: "TalkSpeakers",
    id: string,
    speakerID: string,
    talkID: string,
    speaker:  {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTalkSpeakersMutationVariables = {
  input: DeleteTalkSpeakersInput,
  condition?: ModelTalkSpeakersConditionInput | null,
};

export type DeleteTalkSpeakersMutation = {
  deleteTalkSpeakers?:  {
    __typename: "TalkSpeakers",
    id: string,
    speakerID: string,
    talkID: string,
    speaker:  {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSpeakerQueryVariables = {
  id: string,
};

export type GetSpeakerQuery = {
  getSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    bio?: string | null,
    talks?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpeakersQueryVariables = {
  filter?: ModelSpeakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpeakersQuery = {
  listSpeakers?:  {
    __typename: "ModelSpeakerConnection",
    items:  Array< {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTalkQueryVariables = {
  id: string,
};

export type GetTalkQuery = {
  getTalk?:  {
    __typename: "Talk",
    id: string,
    name: string,
    description: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    speakers?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    talkCategoryId?: string | null,
  } | null,
};

export type ListTalksQueryVariables = {
  filter?: ModelTalkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTalksQuery = {
  listTalks?:  {
    __typename: "ModelTalkConnection",
    items:  Array< {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    id: string,
    owner: string,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      owner: string,
      redeemed: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTalkSpeakersQueryVariables = {
  id: string,
};

export type GetTalkSpeakersQuery = {
  getTalkSpeakers?:  {
    __typename: "TalkSpeakers",
    id: string,
    speakerID: string,
    talkID: string,
    speaker:  {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTalkSpeakersQueryVariables = {
  filter?: ModelTalkSpeakersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTalkSpeakersQuery = {
  listTalkSpeakers?:  {
    __typename: "ModelTalkSpeakersConnection",
    items:  Array< {
      __typename: "TalkSpeakers",
      id: string,
      speakerID: string,
      talkID: string,
      speaker:  {
        __typename: "Speaker",
        id: string,
        name: string,
        bio?: string | null,
        talks?:  {
          __typename: "ModelTalkSpeakersConnection",
          items:  Array< {
            __typename: "TalkSpeakers",
            id: string,
            speakerID: string,
            talkID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      talk:  {
        __typename: "Talk",
        id: string,
        name: string,
        description: string,
        category?:  {
          __typename: "Category",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        speakers?:  {
          __typename: "ModelTalkSpeakersConnection",
          items:  Array< {
            __typename: "TalkSpeakers",
            id: string,
            speakerID: string,
            talkID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        talkCategoryId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSpeakerSubscription = {
  onCreateSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    bio?: string | null,
    talks?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpeakerSubscription = {
  onUpdateSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    bio?: string | null,
    talks?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpeakerSubscription = {
  onDeleteSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    bio?: string | null,
    talks?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTalkSubscription = {
  onCreateTalk?:  {
    __typename: "Talk",
    id: string,
    name: string,
    description: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    speakers?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    talkCategoryId?: string | null,
  } | null,
};

export type OnUpdateTalkSubscription = {
  onUpdateTalk?:  {
    __typename: "Talk",
    id: string,
    name: string,
    description: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    speakers?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    talkCategoryId?: string | null,
  } | null,
};

export type OnDeleteTalkSubscription = {
  onDeleteTalk?:  {
    __typename: "Talk",
    id: string,
    name: string,
    description: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    speakers?:  {
      __typename: "ModelTalkSpeakersConnection",
      items:  Array< {
        __typename: "TalkSpeakers",
        id: string,
        speakerID: string,
        talkID: string,
        speaker:  {
          __typename: "Speaker",
          id: string,
          name: string,
          bio?: string | null,
          talks?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          description: string,
          category?:  {
            __typename: "Category",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          speakers?:  {
            __typename: "ModelTalkSpeakersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          talkCategoryId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    talkCategoryId?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    id: string,
    owner: string,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    id: string,
    owner: string,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    id: string,
    owner: string,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTalkSpeakersSubscription = {
  onCreateTalkSpeakers?:  {
    __typename: "TalkSpeakers",
    id: string,
    speakerID: string,
    talkID: string,
    speaker:  {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTalkSpeakersSubscription = {
  onUpdateTalkSpeakers?:  {
    __typename: "TalkSpeakers",
    id: string,
    speakerID: string,
    talkID: string,
    speaker:  {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTalkSpeakersSubscription = {
  onDeleteTalkSpeakers?:  {
    __typename: "TalkSpeakers",
    id: string,
    speakerID: string,
    talkID: string,
    speaker:  {
      __typename: "Speaker",
      id: string,
      name: string,
      bio?: string | null,
      talks?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      description: string,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      speakers?:  {
        __typename: "ModelTalkSpeakersConnection",
        items:  Array< {
          __typename: "TalkSpeakers",
          id: string,
          speakerID: string,
          talkID: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string,
            bio?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            talkCategoryId?: string | null,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      talkCategoryId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
