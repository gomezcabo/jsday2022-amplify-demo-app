<script setup lang="ts">
import { CognitoUser } from "@aws-amplify/auth";
import { ref, nextTick, watchEffect } from "vue";
import { useChat } from "../composables/use-chat";
import { useScrollElement } from "../composables/use-scroll-element";

const { user } = defineProps<{ user: CognitoUser }>();

const { message, messages, loadingMessages, onSendMessage } = useChat();

const { elementRef, scrollToBottom } = useScrollElement();

const firstMessagesFetch = ref(true);

watchEffect(() => {
  if (messages.value.length > 0) {
    nextTick(() => {
      if (firstMessagesFetch.value) {
        scrollToBottom();
        firstMessagesFetch.value = false;
      } else {
        scrollToBottom("smooth");
      }
      scrollToBottom;
    });
  }
});
</script>

<template>
  <section class="w-full">
    <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 sm:px-6 flex justify-between items-center">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Chat</h2>
      </div>
      <div class="mt-6 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              ref="elementRef"
              class="relative h-[50vh] flex flex-col gap-3 overflow-auto border-t border-gray-200 p-6"
            >
              <div v-if="loadingMessages" class="text-sm font-medium text-gray-900">Loading messages...</div>
              <div v-else-if="messages.length === 0" class="text-sm font-medium text-gray-900">No messages</div>
              <div v-for="message of messages">
                <div class="flex gap-1 items-center text-oran-800">
                  <span
                    class="font-bold text-sm"
                    :class="{ 'text-orange-700': user.getUsername() === message.owner }"
                    >{{ message.owner }}</span
                  >
                  <span class="text-xs mt-[1px] text-gray-400">{{
                    new Date(message.createdAt).toLocaleTimeString()
                  }}</span>
                </div>
                <div class="text-gray-700 text-sm">
                  {{ message.message }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-2 w-full">
        <input
          type="text"
          name="speaker-name"
          id="speaker-name"
          class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter message here..."
          v-model="message"
          @keyup.enter="onSendMessage"
        />
      </div>
    </div>
  </section>
</template>
