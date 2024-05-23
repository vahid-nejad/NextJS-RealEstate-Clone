import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const PropertyContainer = ({ children }: Props) => {
  return (
    <div className="p-5 flex flex-col gap-10 items-center">
      <div className="flex flex-wrap justify-center gap-6">{children}</div>
      {/* ToDo: Put Pagination Here */}
    </div>
  );
};

export default PropertyContainer;
