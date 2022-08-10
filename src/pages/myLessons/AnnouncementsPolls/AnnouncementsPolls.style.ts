import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1,
    background: theme.palette.background.paper,

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 20,
      margin: '80px 20%',
      padding: 20,
      position: 'relative',
      borderRadius: 5,
      boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.15)',
      fontSize: 18,
      transition: 'all 0.3s',

      [theme.breakpoints.down(1250)]: {
        margin: '80px 10%',
      },
      [theme.breakpoints.down(800)]: {
        margin: '80px 5%',
      },
      [theme.breakpoints.down(700)]: {
        margin: '80px 0%',
      },
      [theme.breakpoints.down(450)]: {
        padding: '20px 15px',
        fontSize: 16,
      },

      '& > .tabs': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        columnGap: '5%',
        padding: '0 5%',

        [theme.breakpoints.down(450)]: {
          padding: 0,
        },

        '& .tabTitle': {
          flex: 1,
          fontSize: '1.5em',
          borderRadius: 10,
          transition: 'all 0.3s',

          [theme.breakpoints.down(450)]: {
            fontSize: '1.2em',
          },

          '&.active': {
            fontWeight: 400,
            background: theme.palette.primary.main,
            color: theme.palette.primary.light,
          },
        },
      },

      '& > .selectLesson': {
        padding: '0 5%',
        margin: '15px 0',
      },

      '& > .items': {
        display: 'flex',
        columnGap: 20,

        '& .left, .right, .center': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          rowGap: 15,
        },
      },
    },

    '& .addButton': {
      width: 80,
      aspectRatio: 1,
      position: 'fixed',
      left: '15%',
      bottom: 30,
      borderRadius: '100%',
      background: theme.palette.primary.main,
      boxShadow: '0px 1px 3px 2px rgba(0, 0, 0, 0.35)',
      transition: 'all 0.3s',

      [theme.breakpoints.down(1250)]: {
        left: '3%',
      },

      [theme.breakpoints.down(960)]: {
        width: 70,
        left: 15,
        top: 5,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
      },

      [theme.breakpoints.down(580)]: {
        width: 50,
        left: '50%',
        top: -5,
      },

      '& button': {
        width: '100%',
        height: '100%',
        color: '#fff',

        '& svg': {
          fontSize: '1.5em',
          [theme.breakpoints.down(580)]: {
            fontSize: '1.2em',
          },
        },
      },
    },
  },
}))

export default useStyle
