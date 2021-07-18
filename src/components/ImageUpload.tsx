import { FC, useState } from "react";
import Dropzone from "react-dropzone";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 350,
    height: 350,
    backgroundColor: "rgba(121, 143, 111, 60%)",
    border: "10px solid rgb(121, 143, 111)",
  },
  preview: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },
});

export const ImageUpload: FC = () => {
  const classes = useStyles();
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
      onDrop={(e) => console.log(e)}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className={classes.root}>
          {fileUrl && (
            <img
              className={classes.preview}
              src={fileUrl}
              alt="uploaded image preview"
            />
          )}
          <input {...getInputProps()} />
        </div>
      )}
    </Dropzone>
  );
};
