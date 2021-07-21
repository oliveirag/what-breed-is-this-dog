import { makeStyles } from "@material-ui/styles";

export const useSameBreedGalleryStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "0 16px",
    listStyleType: "none",
    "@media (min-width: 768px) and (max-width: 1200px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  imageItem: {
    padding: 2,
    height: 200,
    "@media (min-width: 768px)": {
      height: 220,
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 25%",
    verticalAlign: "middle",
  },
});
