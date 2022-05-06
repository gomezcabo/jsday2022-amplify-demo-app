import { ref } from "vue";
import { useRouter } from "vue-router";
import { buyTicket } from "../api/api";

export function useBuyTicket() {
  const router = useRouter();

  const processingPayment = ref(false);

  const onCancel = () => {
    router.back();
  };

  const onBuyTicket = async () => {
    processingPayment.value = true;
    await buyTicket({
      cardNumber: "fake_card_number",
      expirationDate: "fake_expiration_date",
      cvc: "fake_cvc",
    });
    processingPayment.value = false;
    router.push("/tickets");
  };

  return { onCancel, onBuyTicket, processingPayment };
}
