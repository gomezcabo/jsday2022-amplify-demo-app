<script setup lang="ts">
import { useGallery } from "../composables/use-gallery";
import { useUpload } from "../composables/use-upload";

const { loadingPhotos, photos, refetchPhotos } = useGallery();
const { uploadFile, uploadingFile } = useUpload();

const onFileChange = async (event: any) => {
  const file = event.target.files[0];
  const filename = file.name;

  await uploadFile(filename, file);

  refetchPhotos();
};
</script>

<template>
  <section>
    <form>
      <div class="space-y-6 shadow sm:rounded-md bg-white py-6 px-4 sm:p-6">
        <div class="flex justify-between items-start mb-8">
          <div class="bg-white">
            <h1 class="text-lg leading-6 font-medium text-gray-900">Gallery</h1>
            <p class="mt-1 text-sm text-gray-500">Share your photos of the event with the rest of the world!</p>
          </div>

          <label
            for="file-upload"
            class="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 focus:outline-none cursor-pointer"
            :class="{ 'hover:bg-orange-700': !uploadingFile, 'opacity-50': uploadingFile }"
          >
            {{ uploadingFile ? "Uploading..." : "Upload photo" }}
            <input id="file-upload" type="file" @change="onFileChange" class="sr-only" :disabled="uploadingFile" />
          </label>
        </div>

        <div v-if="loadingPhotos" class="text-sm font-medium text-gray-900">Loading photos...</div>
        <div v-else-if="photos.length === 0" class="text-sm font-medium text-gray-900">No photos</div>
        <div
          v-else
          class="grid grid-cols-3 gap-4 w-full rounded-xl"
          :class="{
            'opacity-25': uploadingFile,
          }"
        >
          <img v-for="photo of photos" :key="photo" :src="photo" class="w-full h-48 object-cover shadow" />
        </div>
      </div>
    </form>
  </section>
</template>
