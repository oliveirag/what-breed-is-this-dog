import { FC, useState } from "react";
import Dropzone from "react-dropzone";

export const ImageUpload: FC = () => {
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
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          {fileUrl && <img src={fileUrl} />}
        </div>
      )}
    </Dropzone>
  );
};
