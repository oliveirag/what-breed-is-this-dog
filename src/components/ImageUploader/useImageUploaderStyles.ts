import { makeStyles } from "@material-ui/styles";

export const useImageUploaderStyles = makeStyles({
  button: {
    width: 240,
    backgroundColor: "rgb(121, 143, 111)",
    border: "none",
    padding: 8,
    borderRadius: 24,
    fontFamily: "Aladin",
    fontSize: 32,
    color: "white",
  },
  dropzone: {
    "@media (max-width: 450px)": {
      display: "none",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 350,
    height: 350,
    backgroundColor: "rgba(121, 143, 111, 60%)",
    border: "10px solid rgb(121, 143, 111)",
  },
  dropzonePhrase: {
    "@media (max-width: 450px)": {
      display: "none",
    },
    color: "rgb(121, 143, 111)",
    fontSize: 24,
    padding: 8,
  },
  preview: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },
});
