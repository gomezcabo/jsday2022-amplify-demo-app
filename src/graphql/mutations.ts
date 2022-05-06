/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const purchaseTicket = /* GraphQL */ `
  mutation PurchaseTicket($input: PurchaseTicketInput) {
    purchaseTicket(input: $input) {
      ticketId
    }
  }
`;
export const redeemTicket = /* GraphQL */ `
  mutation RedeemTicket($input: RedeemTicketInput) {
    redeemTicket(input: $input) {
      ticketId
    }
  }
`;
export const createSpeaker = /* GraphQL */ `
  mutation CreateSpeaker(
    $input: CreateSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    createSpeaker(input: $input, condition: $condition) {
      id
      name
      bio
      talks {
        items {
          id
          speakerID
          talkID
          speaker {
            id
            name
            bio
            talks {
              nextToken
            }
            createdAt
            updatedAt
          }
          talk {
            id
            name
            description
            category {
              id
              name
              createdAt
              updatedAt
            }
            speakers {
              nextToken
            }
            createdAt
            updatedAt
            talkCategoryId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpeaker = /* GraphQL */ `
  mutation UpdateSpeaker(
    $input: UpdateSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    updateSpeaker(input: $input, condition: $condition) {
      id
      name
      bio
      talks {
        items {
          id
          speakerID
          talkID
          speaker {
            id
            name
            bio
            talks {
              nextToken
            }
            createdAt
            updatedAt
          }
          talk {
            id
            name
            description
            category {
              id
              name
              createdAt
              updatedAt
            }
            speakers {
              nextToken
            }
            createdAt
            updatedAt
            talkCategoryId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpeaker = /* GraphQL */ `
  mutation DeleteSpeaker(
    $input: DeleteSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    deleteSpeaker(input: $input, condition: $condition) {
      id
      name
      bio
      talks {
        items {
          id
          speakerID
          talkID
          speaker {
            id
            name
            bio
            talks {
              nextToken
            }
            createdAt
            updatedAt
          }
          talk {
            id
            name
            description
            category {
              id
              name
              createdAt
              updatedAt
            }
            speakers {
              nextToken
            }
            createdAt
            updatedAt
            talkCategoryId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTalk = /* GraphQL */ `
  mutation CreateTalk(
    $input: CreateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    createTalk(input: $input, condition: $condition) {
      id
      name
      description
      category {
        id
        name
        createdAt
        updatedAt
      }
      speakers {
        items {
          id
          speakerID
          talkID
          speaker {
            id
            name
            bio
            talks {
              nextToken
            }
            createdAt
            updatedAt
          }
          talk {
            id
            name
            description
            category {
              id
              name
              createdAt
              updatedAt
            }
            speakers {
              nextToken
            }
            createdAt
            updatedAt
            talkCategoryId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      talkCategoryId
    }
  }
`;
export const updateTalk = /* GraphQL */ `
  mutation UpdateTalk(
    $input: UpdateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    updateTalk(input: $input, condition: $condition) {
      id
      name
      description
      category {
        id
        name
        createdAt
        updatedAt
      }
      speakers {
        items {
          id
          speakerID
          talkID
          speaker {
            id
            name
            bio
            talks {
              nextToken
            }
            createdAt
            updatedAt
          }
          talk {
            id
            name
            description
            category {
              id
              name
              createdAt
              updatedAt
            }
            speakers {
              nextToken
            }
            createdAt
            updatedAt
            talkCategoryId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      talkCategoryId
    }
  }
`;
export const deleteTalk = /* GraphQL */ `
  mutation DeleteTalk(
    $input: DeleteTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    deleteTalk(input: $input, condition: $condition) {
      id
      name
      description
      category {
        id
        name
        createdAt
        updatedAt
      }
      speakers {
        items {
          id
          speakerID
          talkID
          speaker {
            id
            name
            bio
            talks {
              nextToken
            }
            createdAt
            updatedAt
          }
          talk {
            id
            name
            description
            category {
              id
              name
              createdAt
              updatedAt
            }
            speakers {
              nextToken
            }
            createdAt
            updatedAt
            talkCategoryId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      talkCategoryId
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      owner
      redeemed
      createdAt
      updatedAt
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      owner
      redeemed
      createdAt
      updatedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      owner
      redeemed
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createTalkSpeakers = /* GraphQL */ `
  mutation CreateTalkSpeakers(
    $input: CreateTalkSpeakersInput!
    $condition: ModelTalkSpeakersConditionInput
  ) {
    createTalkSpeakers(input: $input, condition: $condition) {
      id
      speakerID
      talkID
      speaker {
        id
        name
        bio
        talks {
          items {
            id
            speakerID
            talkID
            speaker {
              id
              name
              bio
              createdAt
              updatedAt
            }
            talk {
              id
              name
              description
              createdAt
              updatedAt
              talkCategoryId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      talk {
        id
        name
        description
        category {
          id
          name
          createdAt
          updatedAt
        }
        speakers {
          items {
            id
            speakerID
            talkID
            speaker {
              id
              name
              bio
              createdAt
              updatedAt
            }
            talk {
              id
              name
              description
              createdAt
              updatedAt
              talkCategoryId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        talkCategoryId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTalkSpeakers = /* GraphQL */ `
  mutation UpdateTalkSpeakers(
    $input: UpdateTalkSpeakersInput!
    $condition: ModelTalkSpeakersConditionInput
  ) {
    updateTalkSpeakers(input: $input, condition: $condition) {
      id
      speakerID
      talkID
      speaker {
        id
        name
        bio
        talks {
          items {
            id
            speakerID
            talkID
            speaker {
              id
              name
              bio
              createdAt
              updatedAt
            }
            talk {
              id
              name
              description
              createdAt
              updatedAt
              talkCategoryId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      talk {
        id
        name
        description
        category {
          id
          name
          createdAt
          updatedAt
        }
        speakers {
          items {
            id
            speakerID
            talkID
            speaker {
              id
              name
              bio
              createdAt
              updatedAt
            }
            talk {
              id
              name
              description
              createdAt
              updatedAt
              talkCategoryId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        talkCategoryId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTalkSpeakers = /* GraphQL */ `
  mutation DeleteTalkSpeakers(
    $input: DeleteTalkSpeakersInput!
    $condition: ModelTalkSpeakersConditionInput
  ) {
    deleteTalkSpeakers(input: $input, condition: $condition) {
      id
      speakerID
      talkID
      speaker {
        id
        name
        bio
        talks {
          items {
            id
            speakerID
            talkID
            speaker {
              id
              name
              bio
              createdAt
              updatedAt
            }
            talk {
              id
              name
              description
              createdAt
              updatedAt
              talkCategoryId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      talk {
        id
        name
        description
        category {
          id
          name
          createdAt
          updatedAt
        }
        speakers {
          items {
            id
            speakerID
            talkID
            speaker {
              id
              name
              bio
              createdAt
              updatedAt
            }
            talk {
              id
              name
              description
              createdAt
              updatedAt
              talkCategoryId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        talkCategoryId
      }
      createdAt
      updatedAt
    }
  }
`;
