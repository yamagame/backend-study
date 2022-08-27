import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:4000/graphql";
const query = `{ hello, world }`;

function main(query: string) {
  const client = new GraphQLClient(endpoint);
  client.request(query).then((data: any) => console.log(data));
}

if (require.main === module) {
  main(process.argv[2] || query);
}
