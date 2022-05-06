<script setup lang="ts">
import { useNewSpeaker } from "../composables/use-new-speaker";
const { name, bio, formIsValid, onCancel, onAddSpeaker, addingSpeaker } = useNewSpeaker();
</script>

<template>
  <section>
    <form>
      <div class="space-y-6 shadow sm:rounded-md bg-white py-6 px-4 sm:p-6">
        <div class="bg-white">
          <h1 class="text-lg leading-6 font-medium text-gray-900">New Speaker</h1>
          <p class="mt-1 text-sm text-gray-500">
            Let’s get started by filling in the information below to add a new speaker.
          </p>
        </div>

        <div>
          <label for="speaker-name" class="block text-sm font-medium text-gray-700">Name</label>
          <div class="mt-1">
            <input
              type="text"
              name="speaker-name"
              id="speaker-name"
              class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
              placeholder="E.g. John Doe"
              v-model="name"
            />
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Bio</label>
          <div class="mt-1">
            <textarea
              id="description"
              name="description"
              rows="3"
              class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border border-gray-300 rounded-md"
              placeholder="E.g. John is an wonderful person who..."
              v-model="bio"
            />
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="button"
            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
            @click="onCancel()"
          >
            Cancel
          </button>
          <button
            type="button"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200 disabled:opacity-50"
            :class="{ 'hover:bg-orange-700': !addingSpeaker && formIsValid }"
            :disabled="!formIsValid || addingSpeaker"
            @click="onAddSpeaker()"
          >
            {{ addingSpeaker ? "Adding speaker..." : "Add speaker" }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>
