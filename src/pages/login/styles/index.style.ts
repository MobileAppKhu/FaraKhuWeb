import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '6em',
  },
  title: {
    marginTop: '30px !important',
    fontSize: '40px !important',
    fontWeight: 'normal !important',
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },
  formControl: {
    marginTop: '20px',
    width: '100%',
  },
  inputLable: {
    fontSize: '16px !important',
    marginBottom: '5px !important',
    fontWeight: 'normal',
    color: theme.palette.primary.onContainer,
  },
  textField: {
    width: '100%',
    backgroundColor: '#dfe2eb',
    borderRadius: '5px',
  },
  helperText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'normal',
    marginTop: '5px',
    '& .right': {
      '& span': {
        color: '#73777f',
      },
      '& a': {
        marginRight: '5px',
        color: theme.palette.primary.main,
        textDecoration: 'none',
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      },
    },
    '& .left': {
      '& .rememberMe': {
        color: '#1b1b1b',
        fontSize: 12,
        fontWeight: 400,
      },
      '& label': {
        marginLeft: 0,
      },
    },
  },
  submitBtn: {
    width: '100%',
    height: '40px',
    marginTop: '30px !important',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#1660a5 !important',
    },
  },
  supportLink: {
    display: 'inline-block',
    marginTop: '10px',
    fontSize: '12px',
    fontWeight: 'normal',
    color: theme.palette.primary.onContainer,
    textDecoration: 'none',
    borderBottom: `1px solid ${theme.palette.primary.onContainer}`,
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
