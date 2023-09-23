import { type FC } from "react";
import { gql } from "@apollo/client";
import { getClient } from "../client";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const userQuery = gql`
  query {
    getUser(id: "1") {
      id
      name
    }
  }
`;

type Props = {
  index: number;
};

export const QueryFromServer: FC<Props> = async ({ index }) => {
  const { data } = await getClient().query({ query: userQuery });

  return (
    <p>
      data received during RSC render: ${index} {JSON.stringify(data)}
    </p>
  );
};
