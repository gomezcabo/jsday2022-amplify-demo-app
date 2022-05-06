<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/outline";
import { useTalks } from "../composables/use-talks";
const { talks, loadingTalks } = useTalks();
</script>

<template>
  <section>
    <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 sm:px-6 flex justify-between items-center">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Talks</h2>
        <router-link to="/new-talk"><plus-icon class="w-5" /></router-link>
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
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Speaker(s)
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-if="loadingTalks">
                    <td colspan="4" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Loading talks, please wait...
                    </td>
                  </tr>
                  <tr v-else-if="talks.length === 0">
                    <td colspan="4" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">No talks</td>
                  </tr>
                  <template v-else>
                    <tr v-for="talk in talks" :key="talk.id">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                        {{ talk.id.slice(0, 8) }}
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-500">
                        {{ talk.name }}
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-500">
                        {{ talk.description }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ talk.category.name }}
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-500">
                        {{ talk.speakers.items.map((speaker) => speaker?.speaker?.name).join(", ") }}
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
