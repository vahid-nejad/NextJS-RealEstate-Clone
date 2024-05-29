import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { Button } from "@nextui-org/react";
import { SubscriptionPlan } from "@prisma/client";

type Props = {
  plan: SubscriptionPlan;
};
const PurchasePlan = ({ plan }: Props) => {
  if (plan.price === 0) return <Button>Try it for free!</Button>;
  return (
    <Button color="secondary" endContent={<ShoppingBagIcon className="w-4" />}>
      Purchase Subscription
    </Button>
  );
};

export default PurchasePlan;
