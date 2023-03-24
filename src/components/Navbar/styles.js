import { makeStyles } from '@mui/styles';

const drawerWidth = 200;

export default makeStyles((theme) => ({
  toolbar: {
    height: '60px',
    display: 'flex',
    justifyContent: 'flex-grow',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'flex-grow',
      alignItems: 'center',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  imageLink: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '70%',
  },
  linkContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '0px',
      marginTop: '0px',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '64px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '60px',
    },
  },
}));
