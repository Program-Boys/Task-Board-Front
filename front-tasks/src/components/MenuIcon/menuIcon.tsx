import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Brush, Create, Delete } from "@mui/icons-material";

const options = ["Rename list", "Set color", "Delete list"];

const ITEM_HEIGHT = 48;

const MenuIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(options);
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={handleClose}
            sx={{
              display: "flex",
              gap: "10px",
              "&:hover": {
                color: "var(--blue)",
                transition: "0.2s",
              },
            }}
          >
            {option === "Rename list" && <Create />}
            {option === "Set color" && <Brush />}
            {option === "Delete list" && <Delete />}
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuIcon;
