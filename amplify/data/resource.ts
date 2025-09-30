import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    // switch to generic public so it works without an API key in this commit
    .authorization((allow) => [allow.public()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",  // <- move away from apiKey for this deploy
    // IMPORTANT: remove apiKeyAuthorizationMode entirely for this commit
  },
});
