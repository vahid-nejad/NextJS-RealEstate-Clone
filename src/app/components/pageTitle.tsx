import Link from "next/link";
import React from "react";

interface Props {
  title?: string;
  href?: string;
  linkCaption?: string;
}
const PageTitle = (props: Props) => {
  return (
    <div className="p-4 bg-gradient-to-br from-cyan-400 to-blue-600 flex justify-between">
      <h1 className="text-white text-xl font-medium">{props.title}</h1>
      {props.href!! && (
        <Link className="text-white hover:text-cyan-200 transition-colors" href={props.href}>
          {props.linkCaption}
        </Link>
      )}
    </div>
  );
};

export default PageTitle;
