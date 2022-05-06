<script setup lang="ts">
import { useBuyTicket } from "../composables/use-buy-ticket";
const { onCancel, onBuyTicket, processingPayment } = useBuyTicket();
</script>

<template>
  <section>
    <form>
      <div class="space-y-6 shadow sm:rounded-md bg-white py-6 px-4 sm:p-6">
        <div class="bg-white">
          <h1 class="text-lg leading-6 font-medium text-gray-900">Purchase Ticket</h1>
          <p class="mt-1 text-sm text-gray-500">Please enter your paymen details</p>
        </div>

        <div>
          <div class="mt-4 mb-8 space-x-4 flex">
            <div class="flex items-center">
              <input
                type="radio"
                name="payment"
                class="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                checked
                readonly
              />
              <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Credit Card</label>
            </div>
            <div class="flex items-center pointer-events-none">
              <input type="radio" name="payment" class="h-4 w-4 border-gray-300" readonly />
              <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">PayPal</label>
            </div>
          </div>

          <label for="speaker-name" class="block text-sm font-medium text-gray-700">Card Number</label>
          <div class="mt-1">
            <input
              type="text"
              name="card-number"
              id="card-number"
              class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
              :value="'4242 4242 4242 4242'"
              readonly
            />
          </div>
        </div>

        <div>
          <label for="speaker-name" class="block text-sm font-medium text-gray-700">Name on card</label>
          <div class="mt-1">
            <input
              type="text"
              name="card-holder"
              id="card-holder"
              class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
              :value="'Juan Antonio Gomez Cabo'"
              readonly
            />
          </div>
        </div>

        <div>
          <label for="speaker-name" class="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
          <div class="mt-1">
            <input
              type="text"
              name="speaker-name"
              id="speaker-name"
              class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
              :value="'01/25'"
              readonly
            />
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="button"
            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
            @click="onCancel()"
            :disabled="processingPayment"
          >
            Cancel
          </button>
          <button
            type="button"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200 disabled:opacity-50"
            :class="{ 'hover:bg-orange-700': !processingPayment }"
            :disabled="processingPayment"
            @click="onBuyTicket()"
          >
            {{ processingPayment ? "Processing..." : "Pay 20€" }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>
