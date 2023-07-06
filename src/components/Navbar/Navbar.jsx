import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SubMenu from "../SubMenu/SubMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menu = [
    "Dashboard",
    "Propietarios",
    "Inquilinos",
    "Ambientes",
    "Items",
  ];
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event, item) => {
    navigate(`/${item}`);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {menu.map((item) => (
          <Button
            key={item}
            onClick={(event) => handleMenuClick(event, item)}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {item}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
