import { ApolloWrapper } from "./apollo-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
