import { createMuiTheme } from "@material-ui/core/styles";
import * as Colors from "./colours";
import { buttons } from "./buttons";
import { palette } from "./palette";
import { containers } from "./container";
import { paper } from "./paper";
import { typography } from "./typography";
const siteThemeSettings = {
  paper,
  buttons,
  palette,
  containers,
  typography,
  colors: {
    white: Colors.white,
    ebony: Colors.ebony,
    toreabay: Colors.toreabay,
    cornflowerblue: Colors.cornflowerblue,
    overlayBlue: Colors.overlayBlue,
    manatee: Colors.manatee,
    athensGray: Colors.athensGray,
    alizarinCrimson: Colors.alizarinCrimson,
    stratos: Colors.stratos,
    slateGray: Colors.slateGray,
    burningOrange: Colors.burningOrange,
    mantis: Colors.mantis,
    sideSubmenuBlue: Colors.sideSubmenuBlue,
    blackRussian: Colors.blackRussian,
    blueHaze: Colors.blueHaze,
    shadows: Colors.shadows,
    atlantis: Colors.atlantis,
    cadetBlue: Colors.cadetBlue,
    dustyGray: Colors.dustyGray,
    puertoRico: Colors.puertoRico,
    alabaster: Colors.alabaster,
    webOrange: Colors.webOrange,
    oceanGreen: Colors.oceangreen,
  },
  MuiButton: {
    label: {
      textTransform: "lowercase",
    },
  },
};

export const getTheme = () => {
  return createMuiTheme(siteThemeSettings);
};
