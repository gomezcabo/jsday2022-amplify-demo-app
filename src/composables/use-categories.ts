import { ref, onMounted } from "vue";
import { Category } from "../API";
import { getCategories } from "../api/api";

export function useCategories() {
  const categories = ref<Category[]>([]);
  const loadingCategories = ref(true);

  onMounted(async () => {
    categories.value = await getCategories();
    loadingCategories.value = false;
  });

  return { categories, loadingCategories };
}
