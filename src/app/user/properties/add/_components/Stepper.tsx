import { cn } from "@nextui-org/react";
import React from "react";

interface Props {
  items: { label: string }[];
  activeItem: number;
  setActiveItem: (index: number) => void;
  className?: string;
}

const Stepper = (props: Props) => {
  return (
    <div className={cn("flex items-center justify-around", props.className)}>
      {props.items.map((item, index) => (
        <>
          <div key={"0" + index} className="flex flex-col items-center">
            <div
              className={cn("rounded-full w-6 h-6 flex justify-center items-center transition", {
                "bg-primary-400 text-white": index === props.activeItem,
                "bg-gray-400 text-white": index > props.activeItem,
                "bg-primary-700 text-white": index < props.activeItem,
                "cursor-pointer": index <= props.activeItem,
              })}
              {...(index < props.activeItem ? { onClick: () => props.setActiveItem(index) } : {})}
            >
              {index + 1}
            </div>
            <p>{item.label}</p>
          </div>
          {index !== props.items.length - 1 && (
            <div
              key={"1" + index}
              className={cn(
                "border h-0 w-full -mt-5 relative after:absolute after:left-0 after:top-0 after:border after:transition-all after:duration-300 after:ease-in",
                {
                  "after:w-full after:border-primary-400": index < props.activeItem,
                  "after:w-0": index >= props.activeItem,
                }
              )}
            ></div>
          )}
        </>
      ))}
    </div>
  );
};

export default Stepper;
