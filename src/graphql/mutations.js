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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
