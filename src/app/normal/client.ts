import { ENDPOINT } from "@/constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  return new ApolloClient({
    uri: ENDPOINT,
    cache: new InMemoryCache(),
  });
};
