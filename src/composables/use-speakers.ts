import { ref, onMounted } from "vue";
import { Speaker } from "../API";
import { getSpeakers } from "../api/api";

export function useSpeakers() {
  const speakers = ref<Speaker[]>([]);
  const loadingSpeakers = ref(false);

  onMounted(async () => {
    loadingSpeakers.value = true;
    speakers.value = await getSpeakers();
    loadingSpeakers.value = false;
  });

  return { speakers, loadingSpeakers };
}
