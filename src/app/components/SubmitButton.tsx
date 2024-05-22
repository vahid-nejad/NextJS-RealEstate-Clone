"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();
  return <Button {...props} disabled={pending} isLoading={pending}></Button>;
}

export default SubmitButton;
