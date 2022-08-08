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
    fontSize: 18,
    transition: 'all 0.3s !important',

    '&.error': {
      backgroundColor: theme.palette.error.dark,
    },

    [theme.breakpoints.down(450)]: {
      width: '80%',
      fontSize: 16,
    },

    '& .modalLogo': {
      width: 30,
      height: 30,
    },

    '& .modalTitle': {
      textAlign: 'center',
      direction: 'rtl',
      lineHeight: 1.3,
      width: '75%',
      fontSize: '1em',

      [theme.breakpoints.down(450)]: {
        width: '100%',
      },
    },

    '& .modalButtons': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: 10,

      '& .modalBtn': {
        flex: 1,
        height: 40,
        borderRadius: 5,
        fontSize: '0.88888em',
        fontWeight: 400,
      },
    },
  },
}))

export default useStyles
