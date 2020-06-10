import * as Colors from "./colours";

export const buttons = {
  primaryButton: {
    color: Colors.white,
    backgroundColor: Colors.cornflowerblue,
    border: "1px solid",
    borderColor: Colors.cornflowerblue,
    boxShadow: "none",
    minHeight: "40px",
    width: "190px",
    "&:hover": {
      color: Colors.white,
      backgroundColor: Colors.toreabay,
      borderColor: Colors.toreabay
    },
    "&:disabled": {
      color: Colors.white,
      backgroundColor: Colors.manatee,
      borderColor: Colors.manatee
    }
  },
  secondaryButton: {
    color: `${Colors.cornflowerblue} !important`,
    backgroundColor: "transparent !important",
    border: "1px solid",
    borderColor: Colors.cornflowerblue,
    boxShadow: "none !important",
    width: "190px",
    minHeight: "40px",
    "&:hover": {
      color: `${Colors.white} !important`,
      backgroundColor: `${Colors.toreabay} !important`,
      borderColor: Colors.toreabay
    }
  },
  iconButton: {
    padding: "0",
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "transparent"
    }
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
      opacity: 1
    }
  },
  leftToggleButtonBorderRadius: {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px"
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
      opacity: 1
    }
  },
  rightToggleButtonBorderRadius: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px"
  },
  buttonFlexStart: {
    display: "flex",
    justifyContent: "flex-start"
  },
  buttonFlexEnd: {
    display: "flex",
    justifyContent: "flex-end"
  }
};
