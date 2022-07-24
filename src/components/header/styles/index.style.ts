import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
  },
  root: {
    padding: '0 100px',
    [theme.breakpoints.down('lg')]: {
      padding: '0 50px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 0px',
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    justifyContent: 'space-between',
  },
  menuIcon: {
    display: 'none',
    [theme.breakpoints.down(1100)]: {
      display: 'block',
    },
  },
  imgContainer: {
    width: 193,
    height: 62,
  },
  img: {
    width: 193,
    height: 62,
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    // columnGap: 6.3,
    alignItems: 'center',
  },
  lightIcon: {
    // fontSize: 37,
  },
  darkIcon: {
    // fontSize: 30,
  },
  isSelectedIcon: {
    color: '#1660a5',
  },
  isNotSelectedIcon: {
    color: '#545f70',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 50,
    transition: 'all 0.45s',

    [theme.breakpoints.down(1100)]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      rowGap: 20,
      width: '50%',
      position: 'absolute',
      padding: 20,
      borderRadius: 5,
      background: '#fff',
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
      top: -200,
      zIndex: -1,

      '& > button': {
        width: '100%',
      },
    },
    [theme.breakpoints.down(1285)]: {
      columnGap: 30,
    },
  },
  openMenu: {
    zIndex: 0,
    top: 125,
  },
  loginButton: {
    width: 160,
    height: 45,
    borderRadius: '13px !important',
    '&:hover': {
      backgroundColor: '#1660a5 !important',
    },
  },
  loginButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}))
export default useStyles
