<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";
import { useNewTalk } from "../composables/use-new-talk";
const {
  name,
  description,
  categoryId,
  speakerId,
  selectedSpeakers,
  formIsValid,
  categories,
  speakers,
  onAddSpeaker,
  onRemoveSpeaker,
  onCancel,
  onAddTalk,
  addingTalk,
} = useNewTalk();
</script>

<template>
  <section>
    <form>
      <div class="space-y-6 shadow sm:rounded-md bg-white py-6 px-4 sm:p-6">
        <div class="bg-white">
          <h1 class="text-lg leading-6 font-medium text-gray-900">New Talk</h1>
          <p class="mt-1 text-sm text-gray-500">
            Let’s get started by filling in the information below to add a new talk.
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
              placeholder="Enter talk name..."
              v-model="name"
            />
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <div class="mt-1">
            <textarea
              id="description"
              name="description"
              rows="3"
              class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border border-gray-300 rounded-md"
              placeholder="Enter talk description..."
              v-model="description"
            />
          </div>
        </div>

        <div class="flex-grow">
          <label class="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="add-speaker"
            class="block w-full shadow-sm mt-1 focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
            v-model="categoryId"
          >
            <option :value="''" disabled>Choose category...</option>
            <option v-for="category of categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div>
          <div class="flex items-end">
            <div class="flex-grow">
              <label class="block text-sm font-medium text-gray-700">Speaker(s)</label>
              <select
                :disabled="speakers.length === 0"
                name="add-speaker"
                class="block w-full shadow-sm mt-1 focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                v-model="speakerId"
                @change="onAddSpeaker"
              >
                <option :value="''" disabled>
                  {{ selectedSpeakers.length === 0 ? "Add speaker..." : "Add another speaker..." }}
                </option>
                <option v-for="speaker of speakers" :key="speaker.id" :value="speaker">
                  {{ speaker.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="list-inside list-disc mt-6 pl-2">
            <div class="py-2 flex items-center" v-for="(speaker, index) of selectedSpeakers" :key="index">
              <XIcon
                class="mr-3 h-4 w-4 text-gray-400 text-red-700 cursor-pointer"
                aria-hidden="true"
                @click="onRemoveSpeaker(index)"
              />
              <span class="text-medium text-gray-800">
                {{ speaker.name }}
              </span>
            </div>
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
            :class="{ 'hover:bg-orange-700': !addingTalk && formIsValid }"
            :disabled="!formIsValid || addingTalk"
            @click="onAddTalk()"
          >
            {{ addingTalk ? "Adding talk..." : "Add talk" }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>
