"use client";
import { fa } from "@faker-js/faker";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { Button } from "@nextui-org/react";
import { SubscriptionPlan } from "@prisma/client";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createPaymentIntent } from "@/lib/actions/payment";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type Props = {
  plan: SubscriptionPlan;
};
const PurchasePlan = ({ plan }: Props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useKindeBrowserClient();

  const intiatePayment = async () => {
    setIsLoading(true);
    const paymentIntent = await createPaymentIntent(
      plan.price * 100,
      `Payment of the user ${user?.given_name} ${user?.family_name} for buying ${plan.name}. `
    );
    setClientSecret(paymentIntent.client_secret);
    setShowCheckout(true);
    setIsLoading(false);
  };
  if (plan.price === 0) return <Button>Try it for free!</Button>;
  return (
    <>
      <Button
        onClick={intiatePayment}
        color="secondary"
        endContent={<ShoppingBagIcon className="w-4" />}
        isLoading={isLoading}
      >
        Purchase Subscription
      </Button>
      {clientSecret!! && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecret,
          }}
        >
          <CheckoutForm plan={plan} show={showCheckout} setShow={setShowCheckout} />
        </Elements>
      )}
    </>
  );
};

export default PurchasePlan;
