import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC", 
    },
    logo : {
        fontFamily: "Work Sans, sans-serif", 
        fontWeight: 600, 
        color: "#FFFEEFE", 
        textAlign: "left",
    },
}));

export default function Header() {

  const { header } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>{curbLogo}</Toolbar>;
  };

  

  const curbLogo = (
      <Typography variant = "h6" component="h1">
          curb
      </Typography>
  );


  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
