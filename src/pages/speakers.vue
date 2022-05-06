<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/outline";
import { useSpeakers } from "../composables/use-speakers";
const { speakers, loadingSpeakers } = useSpeakers();
</script>

<template>
  <section>
    <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 sm:px-6 flex justify-between items-center">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Speakers</h2>
        <router-link to="/new-speaker"> <plus-icon class="w-5" /></router-link>
      </div>
      <div class="mt-6 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden border-t border-gray-200">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bio</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-if="loadingSpeakers">
                    <td colspan="4" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Loading speakers, please wait...
                    </td>
                  </tr>
                  <tr v-else-if="speakers.length === 0">
                    <td colspan="4" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      No speakers
                    </td>
                  </tr>
                  <template v-else>
                    <tr v-for="speaker in speakers" :key="speaker.id">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                        {{ speaker.id.slice(0, 8) }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ speaker.name }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ speaker.bio }}
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
