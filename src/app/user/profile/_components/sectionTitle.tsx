import React from "react";

interface Props {
  title: string;
}
const SectionTitle = (props: Props) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-slate-500">{props.title}</h1>
      <hr className="border-slate-400 my-2 border-solid" />
    </div>
  );
};

export default SectionTitle;
