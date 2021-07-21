import { useState } from "react";

type ImageFileUrlHook = {
  fileUrl: string;
  updatePreview: (file: File[]) => void;
};

export const useImageFileUrl = (): ImageFileUrlHook => {
  const [fileUrl, setFileUrl] = useState("");

  const updatePreview = ([file]: File[]) => {
    if (fileUrl) {
      // disposing object to prevent memory leaks
      URL.revokeObjectURL(fileUrl);
    }
    setFileUrl(URL.createObjectURL(file));
  };

  return { fileUrl, updatePreview };
};
