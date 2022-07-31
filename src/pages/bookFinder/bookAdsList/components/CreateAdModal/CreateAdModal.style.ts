import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxHeight: '90vh',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 7,
    outline: 0,
    boxShadow: '1px 1px 10px -1px rgba(0, 0, 0, 0.25)',
    padding: 40,
    rowGap: 25,
    overflow: 'auto',
    fontSize: 18,

    '& .top': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& .modalTitle': {
        fontSize: '1.3em',
        fontWeight: 600,
        color: theme.palette.tertiary.main,
      },
    },

    '& .bottom': {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: 50,
      justifyContent: 'space-between',
      // columnGap: 10,

      '& > .dataInput': {
        width: '45%',

        '&.textarea': {
          width: '100%',
        },
      },

      '& .confirmBtn': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',

        '& > button': {
          width: '30%',
          fontSize: '1.05em',
          fontWeight: 300,
          borderRadius: 7,
          padding: '5px 20px',
          boxShadow: 'none',
        },
      },
    },
  },
}))

export default useStyle
