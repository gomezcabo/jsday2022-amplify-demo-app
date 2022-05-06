import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { addSpeaker, addSpeakerTalk, addTalk } from "../api/api";
import { useCategories } from "../composables/use-categories";
import { useSpeakers } from "./use-speakers";

export function useNewTalk() {
  const router = useRouter();

  const name = ref("");
  const description = ref("");
  const categoryId = ref("");
  const speakerId = ref("");
  const selectedSpeakers = ref([]);
  const addingTalk = ref(false);

  const { categories } = useCategories();
  const { speakers } = useSpeakers();

  const formIsValid = computed(() => {
    return name.value.length > 0 && categoryId.value.length > 0 && selectedSpeakers.value.length > 0;
  });

  const onCancel = () => {
    router.back();
  };

  const availableSpeakers = computed(() => {
    return speakers.value.filter(
      (speaker) => !selectedSpeakers.value.find((selectedSpeaker) => selectedSpeaker.id === speaker.id)
    );
  });

  const onAddSpeaker = () => {
    selectedSpeakers.value.push(speakerId.value);
    speakerId.value = "";
  };

  function onRemoveSpeaker(index: number) {
    selectedSpeakers.value.splice(index, 1);
  }

  const onAddTalk = async () => {
    addingTalk.value = true;
    const newTalkId = await addTalk({
      name: name.value,
      description: description.value,
      talkCategoryId: categoryId.value,
    });

    await Promise.all(
      selectedSpeakers.value.map((speaker) => addSpeakerTalk({ talkID: newTalkId, speakerID: speaker.id }))
    );

    addingTalk.value = false;

    router.push("/talks");
  };

  return {
    name,
    description,
    categoryId,
    speakerId,
    selectedSpeakers,
    formIsValid,
    speakers: availableSpeakers,
    categories,
    onAddSpeaker,
    onRemoveSpeaker,
    onCancel,
    onAddTalk,
    addingTalk,
  };
}
