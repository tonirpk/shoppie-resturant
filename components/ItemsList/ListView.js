import React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListIcon from "@mui/icons-material/List";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useAppContext } from "../Context/Shoppie";

const ListView = () => {
  const { view, setView } = useAppContext();

  const viewChangeHandler = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <ToggleButtonGroup
      size="small"
      color="primary"
      value={view}
      exclusive
      onChange={viewChangeHandler}
      aria-label="change view"
    >
      <ToggleButton value="grid" aria-label="left aligned">
        <GridOnIcon />
      </ToggleButton>
      <ToggleButton value="line" aria-label="centered">
        <TableRowsIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ListView;
