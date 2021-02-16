import * as Colors from "./colours";

export const buttons = {
  primaryButton: {
    color: Colors.white,
    backgroundColor: Colors.oceangreen,
    border: "1px solid",
    borderColor: Colors.oceangreen,
    boxShadow: "none",
    minHeight: "40px",
    width: "190px",
    "&:hover": {
      color: Colors.white,
      backgroundColor: Colors.toreabay,
      borderColor: Colors.toreabay,
    },
    "&:disabled": {
      color: Colors.white,
      backgroundColor: Colors.manatee,
      borderColor: Colors.manatee,
    },
  },
  secondaryButton: {
    color: Colors.white,
    backgroundColor: Colors.barberrysolid,
    border: "1px solid",
    borderColor: Colors.barberrysolid,
    boxShadow: "none",
    minHeight: "40px",
    width: "190px",
    "&:hover": {
      color: Colors.white,
      backgroundColor: Colors.toreabay,
      borderColor: Colors.toreabay,
    },
    "&:disabled": {
      color: Colors.white,
      backgroundColor: Colors.manatee,
      borderColor: Colors.manatee,
    },
  },
  iconButton: {
    padding: "0",
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  primaryToggleButton: {
    color: Colors.white,
    backgroundColor: Colors.manatee,
    border: "1px solid",
    borderColor: Colors.manatee,
    boxShadow: "none",
    width: "100%",
    minHeight: "40px",
    "&:hover": {
      color: Colors.white,
      backgroundColor: Colors.manatee,
      borderColor: Colors.manatee,
      opacity: 1,
    },
  },
  leftToggleButtonBorderRadius: {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  secondaryToggleButton: {
    color: Colors.manatee,
    backgroundColor: Colors.white,
    border: "1px solid",
    borderColor: Colors.manatee,
    boxShadow: "none",
    width: "100%",
    minHeight: "40px",
    "&:hover": {
      color: Colors.manatee,
      backgroundColor: Colors.white,
      borderColor: Colors.manatee,
      opacity: 1,
    },
  },
  rightToggleButtonBorderRadius: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
  },
  buttonFlexStart: {
    display: "flex",
    justifyContent: "flex-start",
  },
  buttonFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
  },
};
