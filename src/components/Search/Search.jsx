import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { searchMovie } from "../../features/genreOrCategory";

function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIconWrapper}>
        <SearchIcon />
      </div>
      <InputBase
        className={classes.styledInputBase}
        placeholder="Search…"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        value={query}
      />
    </div>
  );
}

export default Search;
