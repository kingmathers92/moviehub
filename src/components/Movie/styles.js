import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
    position: "relative",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    position: "relative",
    display: "inline-block",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "12px",
    height: "300px",
    marginBottom: "10px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  progressBar: {
    position: "relative",
    bottom: "50px",
    left: "-90px",
    padding: "10px",
  },
}));
