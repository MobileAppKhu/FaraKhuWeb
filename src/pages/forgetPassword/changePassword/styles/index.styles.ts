import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '60px !important',
    marginBottom: '30px !important',
    fontSize: '20px !important',
    fontWeight: 'bold !important',
    textAlign: 'center',
    color: theme.palette.surface.light,
    lineHeight: '1.6 !important',
  },
  formControl: {
    marginTop: '30px',
    width: '100%',
  },
  inputLable: {
    fontSize: '16px !important',
    marginBottom: '10px !important',
    fontWeight: 'normal',
    color: theme.palette.primary.main,
  },
  textField: {
    width: '100%',
    backgroundColor: '#dfe2eb',
    borderRadius: '5px',
  },
  submitBtn: {
    width: '100%',
    height: '40px',
    marginTop: '50px !important',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#1660a5 !important',
    },
  },
}))

export default useStyles
