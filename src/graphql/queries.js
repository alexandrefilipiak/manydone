/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncDones = /* GraphQL */ `
  query SyncDones(
    $filter: ModelDoneFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        name
        description
        doneDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDone = /* GraphQL */ `
  query GetDone($id: ID!) {
    getDone(id: $id) {
      id
      userId
      name
      description
      doneDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDones = /* GraphQL */ `
  query ListDones(
    $filter: ModelDoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        name
        description
        doneDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
