import { Button, modal } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  modalDelete: ReactNode;
}
const PropertiesLayout = ({ children, modalDelete }: Props) => {
  return (
    <div>
      <div className="bg-primary-400 flex justify-between items-center p-2">
        <h2 className="text-white text-xl font-semibold px-2">User Properties</h2>
        <Button color="secondary">
          <Link href="/user/properties/add">Add Property</Link>
        </Button>
      </div>
      {children}
      <div>{modalDelete}</div>
    </div>
  );
};

export default PropertiesLayout;
