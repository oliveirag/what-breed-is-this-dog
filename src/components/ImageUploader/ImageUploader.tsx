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
      onDropAccepted={updatePreview}
    >
      {({ getRootProps, getInputProps }) => (
        <>
          <button className={classes.button} {...getRootProps()}>
            upload image
          </button>
          <span className={classes.dropzonePhrase}>or drop below</span>
          <div className={classes.dropzone} {...getRootProps()}>
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
        </>
      )}
    </Dropzone>
  );
};
