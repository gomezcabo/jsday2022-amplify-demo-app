import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import App from "./App.vue";
import Home from "./pages/home.vue";
import Speakers from "./pages/speakers.vue";
import Talks from "./pages/talks.vue";
import Tickets from "./pages/tickets.vue";
import Gallery from "./pages/gallery.vue";
import Chat from "./pages/chat.vue";
import NewSpeaker from "./pages/new-speaker.vue";
import NewTalk from "./pages/new-talk.vue";
import BuyTicket from "./pages/buy-ticket.vue";

import { Amplify } from "aws-amplify";
import { PubSub } from "@aws-amplify/pubsub";
import { API } from "@aws-amplify/api";

import awsconfig from "./aws-exports.js";
import "./main.css";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/speakers", component: Speakers },
  { path: "/talks", component: Talks },
  { path: "/tickets", component: Tickets },
  { path: "/gallery", component: Gallery },
  { path: "/chat", component: Chat },
  { path: "/new-speaker", component: NewSpeaker },
  { path: "/new-talk", component: NewTalk },
  { path: "/buy-ticket", component: BuyTicket },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

API.configure(awsconfig);
Amplify.configure(awsconfig);
PubSub.configure(awsconfig);

const app = createApp(App);
app.use(router);
app.mount("#app");
