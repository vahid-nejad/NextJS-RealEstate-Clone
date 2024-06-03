import { saveSubscription } from "@/lib/actions/subscription";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { SubscriptionPlan } from "@prisma/client";
import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  plan: SubscriptionPlan;
}

const CheckoutForm = (props: Props) => {
  const [isLoading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  if (!user) return;
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (!elements || !stripe) return;

      const result = await stripe?.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/user/profile",
        },
        redirect: "if_required",
      });

      if (result.error) {
        toast.error(result.error.message);
      } else {
        await saveSubscription({
          paymentId: result.paymentIntent.id,
          planId: props.plan.id,
          userId: user?.id,
        });
        toast.success("Payment Sucessfull!");
        router.push("/user/profile");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal isOpen={props.show}>
      <ModalContent>
        <ModalHeader>Complete your subscription purchase</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <PaymentElement />
            {/* <AddressElement
              options={{
                mode: "shipping",
                allowedCountries: ["US"],
              }}
            /> */}
            <div className="flex justify-center gap-4">
              <Button
                isDisabled={isLoading}
                onClick={() => props.setShow(false)}
                color="danger"
                variant="light"
              >
                Cancel
              </Button>
              <Button isLoading={isLoading} color="primary" type="submit">
                Pay
              </Button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutForm;
