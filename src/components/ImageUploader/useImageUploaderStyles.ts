import { makeStyles } from "@material-ui/styles";

export const useImageUploaderStyles = makeStyles({
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
