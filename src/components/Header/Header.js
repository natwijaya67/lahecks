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
        backgroundColor: "#400CCC", 
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    logo : {
        fontFamily: "Work Sans, sans-serif", 
        fontWeight: 600, 
        color: "#FFFEEFE", 
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
}));

export default function Header() {

  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return (
    <Toolbar>
        {curbLogo}
        {getMenuButtons()}
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
