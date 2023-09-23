import { QueryFromServer } from "./query-from-server";

const Page = () => {
  return (
    <>
      {[0, 1, 2].map((v) => (
        <QueryFromServer key={v} index={v} />
      ))}
    </>
  );
};

export default Page;
