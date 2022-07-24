import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '30px !important',
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
  textField: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: '5px',
  },
  submitBtn: {
    width: '100%',
    height: '40px',
    marginTop: '40px !important',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#1660a5 !important',
    },
  },
}))

export default useStyles
