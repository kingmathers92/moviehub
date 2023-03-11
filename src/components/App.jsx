import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Navbar, Movies, MovieInfo, Actors } from "./index";
import useStyles from "./styles";
import ToggleTheme from "../utils/ToggleTheme";

function App() {
  const classes = useStyles();
  return (
    <ToggleTheme>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/approved" element={<Movies />} />
            <Route exact path="/movie/:id" element={<MovieInfo />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            {/* <Route exact path="/profile/:id" element={<Profile />} /> */}
          </Routes>
        </main>
      </div>
    </ToggleTheme>
  );
}

export default App;
