import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useAppContext } from "../Context/Shoppie";
import Autocomplete from "@mui/material/Autocomplete";

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  borderRadius: 20,
  backgroundColor: alpha("#3bb77e", 0.15),
  "&:hover": {
    backgroundColor: alpha("#3bb77e", 0.25),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "secondary.main",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
  },
}));

const SearchBar = () => {
  const { setSearchInput, searchInput } = useAppContext();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  return (
    <Search>
      <StyledInputBase
        placeholder="Search for a meal…"
        inputProps={{ "aria-label": "search" }}
        value={searchInput}
        onChange={handleChange}
        fullWidth
      />
      <IconButton
        sx={{
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "#3bb77d8a" },
        }}
        aria-label="search"
      >
        <SearchIcon sx={{ color: "secondary.main " }} />
      </IconButton>
    </Search>
  );
};

export default SearchBar;
