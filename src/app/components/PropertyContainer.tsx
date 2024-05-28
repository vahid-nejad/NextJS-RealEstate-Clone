import { PropsWithChildren } from "react";
import PaginationContainer from "./PaginationContainer";

type Props = PropsWithChildren<{
  totalPages: number;
  currentPage: number;
}>;

const PropertyContainer = ({ children, currentPage, totalPages }: Props) => {
  return (
    <div className="p-5 flex flex-col gap-10 items-center">
      <div className="flex flex-wrap justify-center gap-6">{children}</div>
      {/* ToDo: Put Pagination Here */}
      <PaginationContainer currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default PropertyContainer;
