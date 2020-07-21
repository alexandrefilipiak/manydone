/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDone = /* GraphQL */ `
  mutation CreateDone(
    $input: CreateDoneInput!
    $condition: ModelDoneConditionInput
  ) {
    createDone(input: $input, condition: $condition) {
      id
      userId
      name
      description
      doneDate
      imageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDone = /* GraphQL */ `
  mutation UpdateDone(
    $input: UpdateDoneInput!
    $condition: ModelDoneConditionInput
  ) {
    updateDone(input: $input, condition: $condition) {
      id
      userId
      name
      description
      doneDate
      imageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDone = /* GraphQL */ `
  mutation DeleteDone(
    $input: DeleteDoneInput!
    $condition: ModelDoneConditionInput
  ) {
    deleteDone(input: $input, condition: $condition) {
      id
      userId
      name
      description
      doneDate
      imageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
