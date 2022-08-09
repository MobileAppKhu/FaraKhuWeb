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
    transition: 'all 0.3s !important',

    [theme.breakpoints.down(1250)]: {
      width: '70%',
    },
    [theme.breakpoints.down(600)]: {
      width: '80%',
    },
    [theme.breakpoints.down(470)]: {
      width: '90%',
      padding: '30px 25px',
    },
    [theme.breakpoints.down(380)]: {
      padding: '30px 15px',
      fontSize: 16,
    },
    [theme.breakpoints.down(335)]: {
      width: '95%',
      fontSize: 14,
    },

    '& .top': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,

      '& .modalTitle': {
        fontSize: '1.3em',
        fontWeight: 600,
        color: theme.palette.tertiary.main,
      },
    },

    '& .pollConfig': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      userSelect: 'none',
      marginTop: -20,

      '& .config': {
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: 0,

        '& .configTitle': {
          fontSize: '0.83em',
          color: '#000',
        },
      },
    },

    '& .bottom': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: 50,
      justifyContent: 'space-between',
      columnGap: 10,
      fontSize: '0.888888em',

      '& > .dataInput': {
        width: '45%',
        display: 'flex',
        alignItems: 'center',
        columnGap: 10,
        transition: 'all 0.3s',

        [theme.breakpoints.down(1250)]: {
          width: '100%',
        },

        '& > .guideBtn': {
          background: theme.palette.background.paper,
          boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.1)',
          fontSize: '1em',
          cursor: 'auto',

          '&.hidden': {
            visibility: 'hidden',
          },

          '& *': {
            fontSize: '0.8em',
          },
        },

        '& .deleteOptionBtn': {
          fontSize: '1em',
          color: theme.palette.error.main,
          padding: 2,

          '& *': {
            fontSize: '1.2em',
          },
        },

        '&.textarea': {
          width: '100%',
        },
      },

      '& .addPollItemBtn': {
        width: '100%',
        margin: '-20px 0 70px 0',

        '& > button': {
          display: 'flex',
          alignItems: 'center',
          columnGap: 5,
          fontSize: '1em',
          fontWeight: 300,
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
          transition: 'all 0.3s',

          [theme.breakpoints.down(1000)]: {
            width: '50%',
          },
          [theme.breakpoints.down(600)]: {
            width: '70%',
          },
        },
      },
    },
  },
}))

export default useStyle
