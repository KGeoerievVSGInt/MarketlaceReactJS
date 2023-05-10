import { makeStyles } from "@mui/material";
import chevronUp from "../assets/inventory/Vector_chevron_up.svg";
import chevronDown from "../assets/inventory/Vector_chevron_down.svg";
export const useStyles = makeStyles({
  input: {
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&:after": {
      content: '""',
      display: "inline-block",
      width: "0.75em",
      height: "0.75em",
      backgroundImage: `url(${chevronUp})`,
      backgroundSize: "contain",
      marginRight: "0.25em",
    },
    "&:before": {
      content: '""',
      display: "inline-block",
      width: "0.75em",
      height: "0.75em",
      backgroundImage: `url(${chevronDown})`,
      backgroundSize: "contain",
      marginRight: "0.25em",
    },
  },
});


