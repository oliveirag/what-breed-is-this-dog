import { makeStyles } from "@material-ui/styles";

export const useImageGalleryStyles = makeStyles({
  root: {
    listStyleType: "none",
    paddingInline: 0,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "0 16px",
  },
  imageItem: {
    padding: 2,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    verticalAlign: "middle",
  },
});
