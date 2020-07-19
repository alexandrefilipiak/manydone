import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

export declare class Done {
  readonly id: string;
  readonly userId?: string;
  readonly name: string;
  readonly description?: string;
  readonly doneDate?: string;
  readonly imageKey?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Done>);
  static copyOf(
    source: Done,
    mutator: (draft: MutableModel<Done>) => MutableModel<Done> | void
  ): Done;
}
