import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    padding: '0 121px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    justifyContent: 'space-between',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
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
    columnGap: 70,
  },
  loginButton: {
    width: 173,
    height: 50,
    borderRadius: '18px !important',
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
