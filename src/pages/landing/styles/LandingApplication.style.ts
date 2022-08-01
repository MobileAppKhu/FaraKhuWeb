import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.background.paper,
  },
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 20,
    padding: '80px 0 100px 0',
    fontSize: 18,
    transition: 'all 0.3s',

    [theme.breakpoints.down(740)]: {
      flexDirection: 'column',
      rowGap: 60,
    },

    '& .rightPart': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      transition: 'all 0.3s',

      [theme.breakpoints.down(1100)]: {
        fontSize: '0.9em',
      },
      [theme.breakpoints.down(890)]: {
        fontSize: '0.8em',
      },
      [theme.breakpoints.down(740)]: {
        alignItems: 'center',
      },

      '& .title': {
        fontSize: '4.44em',
        color: theme.palette.primary.onContainer,
        fontWeight: 500,
        marginBottom: 10,
      },

      '& .description': {
        color: '#73777f',
        fontSize: '1.72em',
        fontWeight: 'normal !important',

        [theme.breakpoints.down(740)]: {
          textAlign: 'center',
        },
      },

      '& .downloadButton': {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.72em',
        marginTop: '2em', // 3.44 * fontSize of root
        columnGap: 20,
        boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.3)',
        borderRadius: 15,
        padding: '0.5em 1em',
        transition: 'all 0.3s',

        [theme.breakpoints.down(320)]: {
          fontSize: '1.5em',
        },

        '& .downloadButtonIcon': {
          color: '#FFF',
          fontSize: '1.2em',
        },

        '& > span': {
          fontSize: '1em',
          fontWeight: 300,
        },
      },
    },

    '& .leftPart': {
      flex: 1.2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      aspectRatio: 1,
      borderRadius: '100%',
      backgroundColor: '#DCE9FF',
      transition: 'all 0.3s, background 0s',

      [theme.breakpoints.down(1200)]: {
        fontSize: '0.85em',
      },
      [theme.breakpoints.down(890)]: {
        fontSize: '0.7em',
      },
      [theme.breakpoints.down(740)]: {
        width: '85%',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        rowGap: 50,
      },

      '& .downloadBox': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        rowGap: 30,
        borderRadius: 20,
        boxShadow: '4px 5px 8px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: theme.palette.primary.onContainer,
        padding: '1.6em 0.8em',
        position: 'absolute',
        top: 0,
        right: -50,

        [theme.breakpoints.down(740)]: {
          position: 'initial',
          boxShadow: '0px 2px 2px 0 rgb(0 0 0 / 40%)',
          fontSize: '1.2em',
        },

        '& .title': {
          fontSize: '1.2em',
          fontWeight: 300,
          textAlign: 'center',
        },

        '& .platformContainer': {
          display: 'flex',
          columnGap: '2em',
          padding: '0 0.888em',

          '& > button': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'all 0.3s',

            [theme.breakpoints.down(1200)]: {
              transform: 'scale(0.9)',
            },
            [theme.breakpoints.down(890)]: {
              transform: 'scale(0.8)',
            },

            '& img': {
              display: 'flex',
              width: 'inherit',
              height: 'inherit',
            },
          },
        },
      },

      '& .userInfo': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        rowGap: 20,
        borderRadius: 20,
        boxShadow: '4px 5px 8px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: theme.palette.primary.onContainer,
        padding: '1em 1.5em 0.5em 1.5em',
        position: 'absolute',
        bottom: 0,
        left: 0,

        [theme.breakpoints.down(740)]: {
          position: 'initial',
          boxShadow: '0px 2px 2px 0 rgb(0 0 0 / 40%)',
          fontSize: '1.2em',
        },

        '& .userInfoTitle': {
          display: 'flex',
          columnGap: 10,
          alignItems: 'center',
          fontSize: '1.1em',
          fontWeight: 300,

          '& .userInfoTitleIcon': {
            fontSize: '1.5em',
            color: theme.palette.primary.light,
          },

          '& span': {
            fontSize: '1.1em',
            fontWeight: 'inherit',
          },
        },

        '& .numberOfUser': {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',

          '& > span': {
            fontSize: '2.2em',
            color: theme.palette.primary.dark,
          },
        },
      },

      '& .mobileImages': {
        [theme.breakpoints.down(740)]: {
          borderRadius: '100%',
          backgroundColor: '#DCE9FF',
        },
        '& .application1': {
          width: '50%',
          userSelect: 'none',
          pointerEvents: 'none',
        },
      },
    },
  },
}))
export default useStyles
