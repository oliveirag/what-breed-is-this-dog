import { FC } from "react";
import Dropzone from "react-dropzone";
import { useImageUploaderStyles } from "./useImageUploaderStyles";
import { useImageFileUrl } from "./useImageFileUrl";

type Props = {
  onImageLoad?: (image: HTMLImageElement) => void;
  predictionHasError: boolean;
};

export const ImageUploader: FC<Props> = ({
  onImageLoad,
  predictionHasError,
}) => {
  const classes = useImageUploaderStyles();
  const { fileUrl, updatePreview } = useImageFileUrl();

  if (predictionHasError) {
    return <>Fail on TensorFlow. Please refresh</>;
  }

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
