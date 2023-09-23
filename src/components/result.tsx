import { type FC } from "react";

type Props = { source: string; data: unknown };

export const Result: FC<Props> = ({ source, data }) => {
  return (
    <div>
      <span>Source: {source}</span>
      <span>
        Data:
        {JSON.stringify(data)}
      </span>
    </div>
  );
};
