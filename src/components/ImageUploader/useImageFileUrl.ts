import { useState } from "react";

export const useImageFileUrl = () => {
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
