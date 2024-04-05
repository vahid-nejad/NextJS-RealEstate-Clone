"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";
import Basic from "./basic";
import { PropertyStatus, PropertyType } from "@prisma/client";
import { cn } from "@nextui-org/react";
import Location from "./Location";
import Features from "./Features";
import Picture from "./Picture";
import Contact from "./Contact";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { date, z } from "zod";
import { AddPropertyFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const steps = [
  {
    label: "Basic",
  },
  {
    label: "Location",
  },
  {
    label: "Features",
  },
  {
    label: "Pictures",
  },
  {
    label: "Contact",
  },
];

interface Props {
  types: PropertyType[];
  statuses: PropertyStatus[];
}

export type AddPropertyInputType = z.infer<typeof AddPropertyFormSchema>;

const AddPropertyForm = (props: Props) => {
  const methods = useForm<AddPropertyInputType>({
    resolver: zodResolver(AddPropertyFormSchema),
  });
  const [images, setImages] = useState<File[]>([]);
  const [step, setStep] = useState(0);

  const onSubmit: SubmitHandler<AddPropertyInputType> = async (data) => {
    console.log({ data });
  };
  return (
    <div>
      <Stepper className="m-2" items={steps} activeItem={step} setActiveItem={setStep} />
      <FormProvider {...methods}>
        <form className="mt-3 p-2" onSubmit={methods.handleSubmit(onSubmit)}>
          <Basic
            className={cn({ hidden: step !== 0 })}
            next={() => setStep((prev) => prev + 1)}
            types={props.types}
            statuses={props.statuses}
          />
          <Location
            next={() => setStep((prev) => prev + 1)}
            prev={() => setStep((prev) => prev - 1)}
            className={cn({ hidden: step !== 1 })}
          />
          <Features
            next={() => setStep((prev) => prev + 1)}
            prev={() => setStep((prev) => prev - 1)}
            className={cn({ hidden: step !== 2 })}
          />
          <Picture
            next={() => setStep((prev) => prev + 1)}
            prev={() => setStep((prev) => prev - 1)}
            className={cn({ hidden: step !== 3 })}
            images={images}
            setImages={setImages}
          />

          <Contact
            prev={() => setStep((prev) => prev - 1)}
            className={cn({ hidden: step !== 4 })}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default AddPropertyForm;