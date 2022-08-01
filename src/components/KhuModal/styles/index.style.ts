import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 5,
    outline: 0,
    boxShadow: '1px 1px 10px -1px rgba(0, 0, 0, 0.25)',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 25,
    alignItems: 'center',
  },
  modalLogo: {
    width: 30,
    height: 30,
  },
  modalTitle: {
    textAlign: 'center',
    direction: 'rtl',
    lineHeight: '1.3 !important',
    width: '75%',
  },
  modalBtn: {
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
  btnTextColor: {},
}))

export default useStyles
