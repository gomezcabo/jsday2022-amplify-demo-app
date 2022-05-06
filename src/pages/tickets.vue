<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { PlusIcon } from "@heroicons/vue/outline";
import { useTickets } from "../composables/use-tickets";
const { tickets, loadingTickets, onRedeemTicket, processingTicket } = useTickets();
</script>

<template>
  <section>
    <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 sm:px-6 flex justify-between items-center">
        <h2 class="text-lg leading-6 font-medium text-gray-900">My Tickets</h2>
        <router-link to="/buy-ticket"> <plus-icon class="w-5" /></router-link>
      </div>
      <div class="mt-6 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden border-t border-gray-200">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purchased at
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      redeemed
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      QR CODE
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-if="loadingTickets">
                    <td colspan="4" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Loading tickets, please wait...
                    </td>
                  </tr>
                  <tr v-else-if="tickets.length === 0">
                    <td colspan="4" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      No tickets
                    </td>
                  </tr>
                  <template v-else>
                    <tr v-for="ticket in tickets" :key="ticket.id">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                        {{ ticket.id }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ new Date(ticket.createdAt).toLocaleString() }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ ticket.redeemed ? "Yes" : "No" }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600"
                        :class="{
                          'opacity-10': ticket.redeemed,
                          'cursor-pointer': !ticket.redeemed,
                          'animate-ping scale-50': processingTicket === ticket.id,
                        }"
                        @click="onRedeemTicket(ticket)"
                      >
                        <qrcode-vue value="value" :size="80" />
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
