import {
  useSuspenseQuery,
  useQuery,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import React, { Suspense } from "react";
import { Result } from "@/components/result";
import { SuspenseText } from "./suspence";

export default function Page() {
  return (
    <>
      <div>test</div>
      <SuspenseQueryUser />
      <Suspense>
        <SuspenseText />
      </Suspense>
    </>
  );
}

const userFragment = gql`
  fragment UserFragment on User {
    id
    name
  }
`;

const userQuery = gql`
  query {
    getUser(id: "1") {
      ...UserFragment
    }
  }
  ${userFragment}
`;

function SuspenseQueryUser({ children }: React.PropsWithChildren) {
  const result = useSuspenseQuery(userQuery, { fetchPolicy: "cache-first" });
  return (
    <>
      <Result source="useSuspenseQuery(userQuery)" data={result.data} />
      <React.Fragment key="children">{children}</React.Fragment>
    </>
  );
}

function QueryUser({ children }: React.PropsWithChildren) {
  const result = useQuery(userQuery, { fetchPolicy: "cache-first" });
  return (
    <>
      <Result source="useQuery(userQuery)" data={result.data} />
      <React.Fragment key="children">{children}</React.Fragment>
    </>
  );
}
