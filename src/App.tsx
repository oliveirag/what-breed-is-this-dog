import React, { FC } from "react";
import logo from './logo.svg';
import { ImageUpload } from "./components/ImageUpload";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    padding: 32,
  }
});

export const App: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
      </header>
      <ImageUpload />
    </div>
  );
}