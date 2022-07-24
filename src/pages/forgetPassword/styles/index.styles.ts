import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    position: 'relative',
    backgroundColor: theme.palette.primary.light,
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em',
  },
  backBtnContainer: {
    position: 'absolute',
    top: '15%',
    left: '15%',

    [theme.breakpoints.down(700)]: {
      top: '10%',
      left: 'calc(50% - 30px)',
    },
  },
  backBtn: {
    width: 60,
    height: 60,
    background: 'white',
    boxShadow: '1px 1px 10px -1px rgba(0, 0, 0, 0.25)',
  },
  form: {
    display: 'flex',
    width: 440,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '70%',
    },
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '6em',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    '& img': {
      width: '100%',
      display: 'flex',
    },
  },
}))

export default useStyles
