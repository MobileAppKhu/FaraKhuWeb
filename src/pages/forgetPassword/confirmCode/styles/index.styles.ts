import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '30px !important',
    fontSize: '18px !important',
    fontWeight: 'bold !important',
    textAlign: 'center',
    color: theme.palette.surface.light,
    lineHeight: '1.6 !important',
  },
  formControl: {
    marginTop: '30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    direction: 'ltr',
  },
  numberField: {
    width: 60,
    height: 60,
    outline: 'none',
    border: '2px solid transparent',
    textAlign: 'center',
    backgroundColor: '#dfe2eb',
    borderRadius: '5px',
    fontSize: 30,
    '&:focus': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  numberFieldBordered: {
    border: `2px solid ${theme.palette.primary.main}`,
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
