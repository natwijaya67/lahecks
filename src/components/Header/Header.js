import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Header() {

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
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
