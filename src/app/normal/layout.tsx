import { FC, PropsWithChildren } from "react";
import { ApolloWrapper } from "./apollo-wrapper";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloWrapper>{children}</ApolloWrapper>;
};

export default Layout;
