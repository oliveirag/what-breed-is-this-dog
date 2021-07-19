import { ChangeEvent, FC, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useImageUploaderStyles } from "./useImageUploaderStyles";

type Props = {
  onLoad?: (fileUrl: string) => void;
};

export const ImageUploader: FC<Props> = ({ onLoad }) => {
  const classes = useImageUploaderStyles();
  const [fileUrl, setFileUrl] = useState("");
  const updatePreview = ([file]: File[]) => {
    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }
    setFileUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (onLoad) {
      onLoad(fileUrl);
    }
  }, [fileUrl, onLoad]);

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
            />
          )}
          <input {...getInputProps()} />
        </div>
      )}
    </Dropzone>
  );
};
