import { ref, onMounted, onUnmounted, nextTick } from "vue";
import _PubSub from "@aws-amplify/pubsub";
import { Message } from "../API";
import { getMessages, subscribeToMessages, addMessage } from "../api/api";

export function useChat() {
  const message = ref("");
  const messages = ref<Message[]>([]);
  const loadingMessages = ref(false);

  let subscription: ZenObservable.Subscription = null;

  onMounted(async () => {
    loadingMessages.value = true;
    messages.value = await getMessages();
    loadingMessages.value = false;

    subscription = subscribeToMessages((message) => {
      messages.value.push(message);
    });
  });

  onUnmounted(() => {
    subscription.unsubscribe();
  });

  const onSendMessage = async () => {
    if (message.value.length === 0) return;

    const userMessage = message.value;

    message.value = "";
    await nextTick();

    addMessage({ message: userMessage });
  };

  return { messages, loadingMessages, message, onSendMessage };
}
