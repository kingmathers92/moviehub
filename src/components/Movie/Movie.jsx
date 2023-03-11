import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CircleRating from "../CircleRating/CircleRating";

import useStyles from "./styles";

function Movie({ movie, i }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={movie.title}
            className={classes.image}
          />
          <Tooltip
            className={classes.progressBar}
            disableTouchListener
            title={`${movie.vote_average} / 10`}
          >
            <div>
              <CircleRating rating={movie.vote_average.toFixed(1)} />
            </div>
          </Tooltip>
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
