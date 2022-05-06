/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpeaker = /* GraphQL */ `
  subscription OnCreateSpeaker {
    onCreateSpeaker {
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
export const onUpdateSpeaker = /* GraphQL */ `
  subscription OnUpdateSpeaker {
    onUpdateSpeaker {
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
export const onDeleteSpeaker = /* GraphQL */ `
  subscription OnDeleteSpeaker {
    onDeleteSpeaker {
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
export const onCreateTalk = /* GraphQL */ `
  subscription OnCreateTalk {
    onCreateTalk {
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
export const onUpdateTalk = /* GraphQL */ `
  subscription OnUpdateTalk {
    onUpdateTalk {
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
export const onDeleteTalk = /* GraphQL */ `
  subscription OnDeleteTalk {
    onDeleteTalk {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket($owner: String) {
    onCreateTicket(owner: $owner) {
      id
      owner
      redeemed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket($owner: String) {
    onUpdateTicket(owner: $owner) {
      id
      owner
      redeemed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket($owner: String) {
    onDeleteTicket(owner: $owner) {
      id
      owner
      redeemed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTalkSpeakers = /* GraphQL */ `
  subscription OnCreateTalkSpeakers {
    onCreateTalkSpeakers {
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
export const onUpdateTalkSpeakers = /* GraphQL */ `
  subscription OnUpdateTalkSpeakers {
    onUpdateTalkSpeakers {
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
export const onDeleteTalkSpeakers = /* GraphQL */ `
  subscription OnDeleteTalkSpeakers {
    onDeleteTalkSpeakers {
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
