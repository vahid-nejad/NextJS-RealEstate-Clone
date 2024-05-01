import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card, Input, Textarea, cn } from "@nextui-org/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AddPropertyInputType } from "./AddPropertyForm";

interface Props {
  next: () => void;
  prev: () => void;
  className?: string;
}
const Location = (props: Props) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<AddPropertyInputType>();
  const handleNext = async () => {
    if (
      await trigger([
        "location.streetAddress",
        "location.city",
        "location.state",
        "location.zip",
        "location.region",
      ])
    )
      props.next();
  };
  return (
    <Card className={cn("p-2  grid grid-cols-1 md:grid-cols-2 gap-3", props.className)}>
      <Input
        {...register("location.streetAddress")}
        errorMessage={errors.location?.streetAddress?.message}
        isInvalid={!!errors.location?.streetAddress}
        label="Street Address"
        name="location.streetAddress"
      />

      <Input
        {...register("location.zip")}
        errorMessage={errors.location?.zip?.message}
        isInvalid={!!errors.location?.zip}
        label="Zip/Postal Code"
      />

      <Input
        {...register("location.city")}
        errorMessage={errors.location?.city?.message}
        isInvalid={!!errors.location?.city}
        label="City"
      />

      <Input
        {...register("location.state")}
        errorMessage={errors.location?.state?.message}
        isInvalid={!!errors.location?.state}
        label="State"
      />

      <Input
        {...register("location.region")}
        errorMessage={errors.location?.region?.message}
        isInvalid={!!errors.location?.region}
        label="Region/Neighborhood"
        className="col-span-2"
      />

      <Textarea
        {...register("location.landmark")}
        errorMessage={errors.location?.landmark?.message}
        isInvalid={!!errors.location?.landmark}
        label="Landmarks"
        className="col-span-2"
      />
      <div className="flex justify-center col-span-2 gap-3">
        <Button
          onClick={props.prev}
          startContent={<ChevronLeftIcon className="w-6" />}
          color="primary"
          className="w-36"
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          endContent={<ChevronRightIcon className="w-6" />}
          color="primary"
          className="w-36"
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default Location;
