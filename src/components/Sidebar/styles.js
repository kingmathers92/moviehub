import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
  },
  bigText: {
    color: 'primary',
    fontSize: 30,
  },
}));
