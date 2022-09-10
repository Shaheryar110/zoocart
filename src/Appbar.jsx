import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CottageIcon from "@mui/icons-material/Cottage";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import "./appbar.css";

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
];

const Appbar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <Stack direction="row" spacing={2} className="bgis">
      <Button variant="contained" size="medium" className="btn-style">
        <CottageIcon />
      </Button>
      <Button variant="contained"  size="medium" className="btn-style">CAR HIRE</Button>
      <Button variant="contained"  size="medium" className="btn-style">VAN HIRE</Button>
      <Button variant="contained"  size="medium" className="btn-style">HEATROW MEET &GREAT</Button>
      <Button variant="contained"  size="medium" className="btn-style">CONTINENTIAL EUROPE</Button>
      <Button variant="contained"  size="medium" className="btn-style">CWD</Button>

      <ButtonGroup
        variant="contained"
        className="btn-style"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleClick}  size="medium" className="btn-style">{options[selectedIndex]}</Button>
        <Button
          size="small"
          className="btn-style"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default Appbar;
