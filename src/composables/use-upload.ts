import { Storage } from "aws-amplify";
import { ref } from "vue";
import awsmobile from "../aws-exports";

export function useUpload() {
  const s3BucketUrl = (fileName: string): string => {
    const s3Bucket = awsmobile["aws_user_files_s3_bucket"];
    return `https://${s3Bucket}.s3.amazonaws.com/public/${fileName}`;
  };

  const uploadingFile = ref(false);

  const uploadFile = async (filename: string, blob: Blob): Promise<string> => {
    uploadingFile.value = true;

    await Storage.put(filename, blob, {
      level: "public",
      customPrefix: { public: "public/" },
    });

    uploadingFile.value = false;

    return s3BucketUrl(filename);
  };

  return { uploadFile, uploadingFile };
}
