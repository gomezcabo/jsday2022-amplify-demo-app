import { ref } from "vue";

export function useScrollElement() {
  const elementRef = ref<HTMLElement>(null);

  const scrollToTop = (behavior: ScrollBehavior = "auto") => {
    const element = elementRef.value;
    element.scrollTo({ top: 0, behavior });
  };

  const scrollToBottom = (behavior: ScrollBehavior = "auto") => {
    const element = elementRef.value;
    element.scrollTo({ top: element.scrollHeight, behavior });
  };

  return {
    elementRef,
    scrollToTop,
    scrollToBottom,
  };
}
