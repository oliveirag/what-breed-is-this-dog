import { FC, useState } from "react";
import Dropzone from "react-dropzone";
import { useImageUploaderStyles } from "./useImageUploaderStyles";

type Props = {
  onImageLoad?: (image: HTMLImageElement) => void;
};

export const ImageUploader: FC<Props> = ({ onImageLoad }) => {
  const classes = useImageUploaderStyles();
  const [fileUrl, setFileUrl] = useState("");
  const updatePreview = ([file]: File[]) => {
    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }
    setFileUrl(URL.createObjectURL(file));
  };

  return (
    <Dropzone
      accept="image/*"
      maxFiles={1}
      multiple={false}
      noClick={false}
      onDropAccepted={updatePreview}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className={classes.root}>
          {fileUrl && (
            <img
              className={classes.preview}
              src={fileUrl}
              alt="uploaded file preview"
              onLoad={(event) =>
                onImageLoad && onImageLoad(event.currentTarget)
              }
            />
          )}
          <input {...getInputProps()} />
        </div>
      )}
    </Dropzone>
  );
};
