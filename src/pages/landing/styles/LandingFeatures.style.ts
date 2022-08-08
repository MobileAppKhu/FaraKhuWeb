import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 20,
    fontSize: 18,
    padding: '70px 0',
    transition: 'all 0.3s',

    [theme.breakpoints.down(830)]: {
      padding: '20px 0',
    },

    [theme.breakpoints.down(610)]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px 0',
      rowGap: 30,
    },

    '& .right': {
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      rowGap: 40,
      transition: 'all 0.3s',

      [theme.breakpoints.down(1090)]: {
        fontSize: '0.75em',
      },
      [theme.breakpoints.down(830)]: {
        fontSize: '0.65em',
      },
      [theme.breakpoints.down(700)]: {
        fontSize: '0.5em',
      },
      [theme.breakpoints.down(610)]: {
        width: '100%',
        fontSize: '0.8em',
        alignItems: 'center',
        textAlign: 'center',
      },

      '& .title': {
        color: theme.palette.primary.light,
        fontSize: '2.6em',
        fontWeight: 500,
      },

      '& .desc': {
        fontSize: '1.6em',
        fontWeight: 300,
      },
    },

    '& .left': {
      width: '70%',
      display: 'flex',
      justifyContent: 'flex-end',
      transform: 'translateY(35%)',
      transition: 'all 0.3s',

      [theme.breakpoints.down(830)]: {
        transform: 'translateY(20%)',
      },
      [theme.breakpoints.down(610)]: {
        transform: 'translateY(0)',
        width: '100%',
      },

      '& .features': {
        width: '62%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        transition: 'all 0.3s',

        [theme.breakpoints.down(1490)]: {
          width: '80%',
        },
        [theme.breakpoints.down(1120)]: {
          width: '90%',
        },
        [theme.breakpoints.down(1010)]: {
          width: '100%',
        },

        '& .featureItem': {
          width: 170,
          aspectRatio: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          rowGap: 10,
          background: theme.palette.background.paper,
          borderRadius: 20,
          boxShadow: '2px 2px 5px 0px rgba(0, 0, 0, 0.25)',
          textDecoration: 'none',
          padding: '0.6em 0.8em 0.6em 0.8em',
          WebkitTapHighlightColor: 'transparent',
          transition: 'all 0.3s',

          [theme.breakpoints.down(830)]: {
            width: 140,
            fontSize: '0.8em',
          },
          [theme.breakpoints.down(700)]: {
            width: 120,
            fontSize: '0.65em',
          },
          [theme.breakpoints.down(610)]: {
            width: 140,
            fontSize: '0.82em',
          },
          [theme.breakpoints.down(340)]: {
            width: '100%',
            height: 100,
            borderRadius: 7,
          },

          '& .featureTitle': {
            display: 'flex',
            alignItems: 'center',
            columnGap: 10,

            '& .icon': {
              width: '1.8em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              '&.medium': {
                width: '2.4em',
              },
              '&.large': {
                width: '2.7em',
              },

              '& img': {
                display: 'flex',
                width: 'inherit',
                height: 'inherit',
              },
            },

            '& .title': {
              fontSize: '0.97em',
              color: theme.palette.primary.onContainer,
              fontWeight: 600,
            },
          },

          '& .featureDesc': {
            textAlign: 'center',
            fontSize: '0.9em',
            color: theme.palette.primary.onContainer,
          },
        },
      },
    },
  },
}))
export default useStyles
