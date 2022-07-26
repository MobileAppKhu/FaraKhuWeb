import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
    position: 'relative', // required for z-index to work
    zIndex: 2, // in order for box-shadow to work between two divs
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    justifyContent: 'space-between',
  },
  menuIcon: {
    display: 'none',
    [theme.breakpoints.down(1100)]: {
      display: 'flex',
      alignItems: 'center',
      columnGap: 10,
    },
  },
  imgContainer: {
    width: 193,
    height: 62,
    [theme.breakpoints.down(390)]: {
      display: 'none',
    },
  },
  img: {
    width: 193,
    height: 62,
  },
  khuLogo: {
    display: 'none',
    width: 55,
    [theme.breakpoints.down(390)]: {
      display: 'block',
    },
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down(610)]: {
      display: 'none',
    },
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
    transition: 'top 0.45s ,z-index 0.45s ,column-gap 0.45s',

    [theme.breakpoints.down(1312)]: {
      columnGap: 24,
    },
    [theme.breakpoints.down(1135)]: {
      columnGap: 10,
    },
    [theme.breakpoints.down(1100)]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      rowGap: 5,
      width: 'auto',
      minWidth: '50%',
      position: 'absolute',
      padding: 20,
      borderRadius: 5,
      background: '#fff',
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
      top: -280,
      zIndex: -1,

      '& > button': {
        width: '100%',
        padding: '10px 0',
      },
    },
    [theme.breakpoints.down(500)]: {
      minWidth: '70%',
    },
  },
  openMenu: {
    zIndex: 0,
    top: 110,
  },
  switchContainerInsideMenu: {
    display: 'none !important',
    [theme.breakpoints.down(610)]: {
      display: 'flex !important',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  loginButton: {
    width: 160,
    height: 45,
    borderRadius: '13px !important',
    '&:hover': {
      backgroundColor: '#1660a5 !important',
    },
    [theme.breakpoints.down(500)]: {
      display: 'none !important',
    },
  },
  loginIconButton: {
    display: 'none !important',
    [theme.breakpoints.down(500)]: {
      display: 'flex !important',
    },
  },
  loginButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}))
export default useStyles
