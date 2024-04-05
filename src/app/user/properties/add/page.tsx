import React from "react";
import AddPropertyForm from "./_components/AddPropertyForm";
import prisma from "@/lib/prisma";

const AddPropertyPage = async () => {
  const [propertyTypes, propertyStatuses] = await Promise.all([
    prisma.propertyType.findMany(),
    prisma.propertyStatus.findMany(),
  ]);
  return <AddPropertyForm types={propertyTypes} statuses={propertyStatuses} />;
};

export default AddPropertyPage;
