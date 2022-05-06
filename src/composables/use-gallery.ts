import { Storage } from "aws-amplify";
import { onMounted, ref } from "vue";
import awsmobile from "../aws-exports";

const s3Bucket = awsmobile["aws_user_files_s3_bucket"];

export function useGallery() {
  const photos = ref<string[]>([]);
  const loadingPhotos = ref(false);

  const fetchPhotos = async () => {
    // Get files from S3
    const files = await Storage.list("");

    // Sort files
    files.sort((f1, f2) => (f1.lastModified < f2.lastModified ? -1 : f1.lastModified > f2.lastModified ? 1 : 0));

    // Discard empty files and get URLs
    photos.value = files
      .filter((file) => file.size > 0)
      .map((file) => `https://${s3Bucket}.s3.amazonaws.com/public/${file.key}`);
  };

  onMounted(async () => {
    loadingPhotos.value = true;
    await fetchPhotos();
    loadingPhotos.value = false;
  });

  const refetchPhotos = () => {
    fetchPhotos();
  };

  return {
    photos,
    loadingPhotos,
    refetchPhotos,
  };
}
