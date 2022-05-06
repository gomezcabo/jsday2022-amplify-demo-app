import { ref, onMounted } from "vue";
import { Ticket } from "../API";
import { getTickets, useTicket } from "../api/api";

export function useTickets() {
  const tickets = ref<Ticket[]>([]);
  const loadingTickets = ref(false);
  const processingTicket = ref(null);

  onMounted(async () => {
    fetchTickets();
  });

  const fetchTickets = async () => {
    loadingTickets.value = true;
    tickets.value = await getTickets();
    loadingTickets.value = false;
  };

  const onRedeemTicket = async (ticket: Ticket) => {
    if (ticket.redeemed) return;
    processingTicket.value = ticket.id;
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000));
    await useTicket({ ticketId: ticket.id });
    processingTicket.value = null;
    fetchTickets();
  };

  return { tickets, loadingTickets, onRedeemTicket, processingTicket };
}
