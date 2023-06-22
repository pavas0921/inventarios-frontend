import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const SubMenu = ({ anchorEl, onClose }) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <MenuItem onClick={onClose}>Submenu 1</MenuItem>
      <MenuItem onClick={onClose}>Submenu 2</MenuItem>
      <MenuItem onClick={onClose}>Submenu 3</MenuItem>
    </Menu>
  );
};

export default SubMenu;
