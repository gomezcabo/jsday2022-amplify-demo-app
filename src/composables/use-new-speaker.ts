import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { addSpeaker } from "../api/api";

export function useNewSpeaker() {
  const router = useRouter();

  const name = ref("");
  const bio = ref("");
  const addingSpeaker = ref(false);

  const formIsValid = computed(() => {
    return name.value.length > 0;
  });

  const onCancel = () => {
    router.back();
  };

  const onAddSpeaker = async () => {
    addingSpeaker.value = true;

    await addSpeaker({
      name: name.value,
      bio: bio.value,
    });

    addingSpeaker.value = false;
    router.push("/speakers");
  };

  return { name, bio, formIsValid, onCancel, onAddSpeaker, addingSpeaker };
}
