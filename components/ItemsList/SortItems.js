import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useAppContext } from "../Context/Shoppie";

const sortMap = [
  {
    title: "Price: Low to High",
    value: 1,
  },
  {
    title: "Price: High to Low",
    value: 2,
  },
  {
    title: "Rate: Low to High",
    value: 3,
  },
  {
    title: "Rate: High to Low",
    value: 4,
  },
];

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: alpha("#3bb77e", 0.15),
  "&:hover": {
    backgroundColor: alpha("#3bb77e", 0.25),
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
  },
}));

const SortItems = () => {
  const { sortValue, setSortValue } = useAppContext();

  return (
    <StyledSelect
      displayEmpty
      renderValue={sortValue !== "" ? undefined : () => "Sort"}
      value={sortValue}
      onChange={(e) => setSortValue(e.target.value)}
      fullWidth
    >
      <MenuItem disabled value="">
        <em>Sort</em>
      </MenuItem>
      {sortMap.map((sort) => (
        <MenuItem key={sort.title} value={sort.value}>
          {sort.title}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default SortItems;
