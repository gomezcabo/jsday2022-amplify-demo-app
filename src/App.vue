<script setup lang="ts">
import { useRouter } from "vue-router";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import {
  HomeIcon,
  UserIcon,
  DocumentTextIcon,
  LogoutIcon,
  TicketIcon,
  ChatIcon,
  PhotographIcon,
} from "@heroicons/vue/outline";

const subNavigation = [
  { name: "Home", path: "/", icon: HomeIcon, current: false },
  { name: "Speakers", path: "/speakers", icon: UserIcon, current: false },
  { name: "Talks", path: "/talks", icon: DocumentTextIcon, current: false },
  { name: "My Tickets", path: "/tickets", icon: TicketIcon, current: false },
  { name: "Gallery", path: "/gallery", icon: PhotographIcon, current: false },
  { name: "Chat", path: "/chat", icon: ChatIcon, current: false },
];

const router = useRouter();

const redirectToHome = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut: amplifySignOut }">
      <div class="h-full">
        <header class="w-full py-4 bg-white text-gray-600 text-center shadow font-bold text-2xl">
          Demo Conference App with <span class="text-orange-600">Amplify</span> <br />
        </header>
        <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:pt-6 lg:px-8">
          <div class="pt-1 pb-8 font-bold text-xl">
            Hi, <span class="text-orange-700">{{ user.username }}</span>
          </div>
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
              <nav class="space-y-1">
                <router-link
                  v-for="item in subNavigation"
                  :key="item.name"
                  :to="{ path: item.path }"
                  class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                  v-slot="{ isActive }"
                >
                  <component :is="item.icon" class="-ml-1 mr-3 h-6 w-6" :class="{ 'text-orange-600': isActive }" />
                  <span class="truncate" :class="{ 'text-orange-600': isActive }">{{ item.name }}</span>
                </router-link>
              </nav>
              <a
                class="mt-16 cursor-pointer text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                @click="
                  redirectToHome();
                  amplifySignOut();
                "
              >
                <component
                  :is="LogoutIcon"
                  class="text-gray-900 group-hover:text-gray-900 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                />
                <span>Logout</span>
              </a>
            </aside>
            <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 xxx">
              <router-view :user="user"></router-view>
            </div>
          </div>
        </main>
      </div>
    </template>
  </authenticator>
</template>
