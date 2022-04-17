import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles,
    Button,
 } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
    {
        label: "Home", 
        href: "/home", 
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Buy",
        href: "/buy",
    },
    {
        label: "Sell",
        href: "/sell",
    },
    {
        label: "Forum",
        href: "/forum",
    },
    {
        label: "Map",
        href: "/map"
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#FFE6D9", 
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    logo : {
        fontFamily: "Work Sans, sans-serif", 
        fontWeight: 600, 
        color: "#FF9900", 
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 700,
        size: "10px",
        color: "#000000",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function Header() {

  const { header, logo, menuButton, toolbar} = useStyles();

  const displayDesktop = () => {
    return (
    <Toolbar className={toolbar}>
        {curbLogo}
        <div>{getMenuButtons()}</div>
        </Toolbar>
    );
  };

  const curbLogo = (
      <Typography variant = "h6" component="h1" className ={logo}>
          curb
      </Typography>
  );

  const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
          return (
              <Button
            {
            ...
            {
                key: label, 
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton
            } }
            >  {label}
            </Button>
          );
        });
    };


  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
