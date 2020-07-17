// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Done } = initSchema(schema);

export {
  Done
};