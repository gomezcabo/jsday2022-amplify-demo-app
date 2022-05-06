import { ref, onMounted } from "vue";
import { Talk } from "../API";
import { getTalks } from "../api/api";

export function useTalks() {
  const talks = ref<Talk[]>([]);
  const loadingTalks = ref(false);

  onMounted(async () => {
    loadingTalks.value = true;
    talks.value = await getTalks();
    loadingTalks.value = false;
  });

  return { talks, loadingTalks };
}
