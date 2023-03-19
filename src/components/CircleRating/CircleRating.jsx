import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import useStyles from "./styles";

function CircleRating({ rating }) {
  const classes = useStyles();

  return (
    <div className={classes.circleRating}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          trailColor: "transparent",
          textColor: "#111",
          textSize: "34px",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
}

export default CircleRating;
