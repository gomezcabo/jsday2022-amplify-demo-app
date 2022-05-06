/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpeaker = /* GraphQL */ `
  query GetSpeaker($id: ID!) {
    getSpeaker(id: $id) {
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
export const listSpeakers = /* GraphQL */ `
  query ListSpeakers(
    $filter: ModelSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTalk = /* GraphQL */ `
  query GetTalk($id: ID!) {
    getTalk(id: $id) {
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
export const listTalks = /* GraphQL */ `
  query ListTalks(
    $filter: ModelTalkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      owner
      redeemed
      createdAt
      updatedAt
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        redeemed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTalkSpeakers = /* GraphQL */ `
  query GetTalkSpeakers($id: ID!) {
    getTalkSpeakers(id: $id) {
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
export const listTalkSpeakers = /* GraphQL */ `
  query ListTalkSpeakers(
    $filter: ModelTalkSpeakersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTalkSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
