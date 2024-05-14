import { NoSymbolIcon } from "@heroicons/react/24/outline";
import React from "react";

function UnauthorizedPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="capitalize">You are not authorized to do this action</p>
      <NoSymbolIcon className="w-36 text-red-500" />
    </div>
  );
}

export default UnauthorizedPage;
