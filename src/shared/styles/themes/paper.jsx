import { shadows } from "./colours";
export const paper = {
  paperBlocks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    margin: "24px",
    height: "263px",
    cursor: "pointer",
    textAlign: "center",
    opacity: "0.9",
    transition: "box-shadow .15s ease",
    ...shadows.paperShadow,
    "&:hover": {
      ...shadows.paperShadowHover,
      opacity: "1.0",
    },
  },
  paperBlocksForWellness: {
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    ...shadows.paperShadow,
    transition: "box-shadow .15s ease",
    "&:hover": {
      ...shadows.paperShadowHover,
    },
  },
  paperBlocksPageHeading: {
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    marginBottom: "30px",
    ...shadows.paperShadow,
  },
  applicationFormPaperBlocks: {
    height: "60%",
    width: "50%",
  },
};
