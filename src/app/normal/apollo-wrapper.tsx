"use client";

import { ApolloProvider } from "@apollo/client";
import { getClient } from "./client";
import { FC, PropsWithChildren } from "react";

export const ApolloWrapper: FC<PropsWithChildren> = ({ children }) => {
  const client = getClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
