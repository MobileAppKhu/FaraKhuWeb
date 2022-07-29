import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    transition: 'all 0.3s',
    fontSize: 28,
    [theme.breakpoints.down(805)]: {
      fontSize: 24,
    },
    [theme.breakpoints.down(730)]: {
      fontSize: 22,
    },
    [theme.breakpoints.down(690)]: {
      fontSize: 28,
    },

    '& .top': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: 20,
      padding: '5rem 0',

      [theme.breakpoints.down(690)]: {
        flexDirection: 'column',
        rowGap: 30,
        padding: '3rem 0',
      },

      '& .socialMedia': {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down(690)]: {
          flexDirection: 'row',
        },

        '& .icon': {
          color: 'inherit',
        },
      },

      '& .quickAccess': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& .title': {
          fontWeight: 400,
          fontSize: '1em',
          marginBottom: 15,
          textAlign: 'center',
        },

        '& .links': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: 6,

          '& a': {
            textDecoration: 'none',
            fontSize: '0.57em',
          },

          '& .item': {
            fontSize: '1em',
            fontWeight: 300,
          },
        },
      },

      '& .addressInfo': {
        '& address': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          rowGap: 20,
          fontStyle: 'normal',

          '& .addressInfoItem': {
            display: 'flex',
            columnGap: 10,
            alignItems: 'center',
            [theme.breakpoints.down(690)]: {
              flexDirection: 'column',
            },

            '& .title': {
              fontWeight: 400,
              fontSize: '0.57em',
            },
            '& .desc': {
              fontSize: '0.57em',
              fontWeight: 300,
              textAlign: 'center',
            },
          },
        },
      },

      '& .languageSwitchContainer': {
        alignSelf: 'flex-end',
        background: 'transparent',
        position: 'relative',

        [theme.breakpoints.down(690)]: {
          alignSelf: 'initial',
        },

        '& .languageSwitchBtn': {
          display: 'flex',
          border: '0.5px solid rgba(255,255,255,0.6)',
          borderRadius: 5,
          cursor: 'pointer',

          '& .langIcon': {
            display: 'flex',
            alignItems: 'center',
          },

          '& .currentLang': {
            display: 'flex',
            alignItems: 'center',
            paddingRight: 14,
            padding: '4px 14px 4px 16px',
            borderRight: '0.5px solid rgba(255,255,255,0.6)',

            '& span': {
              fontWeight: 300,
              fontSize: '0.57em',
            },
          },

          '& .menuArrow': {
            display: 'flex',
            alignItems: 'center',
          },
        },

        '& .langMenu': {
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          width: '100%',
          bottom: '110%',
          background: theme.palette.primary.light,
          borderRadius: 5,
          transform: 'rotateX(90deg)',
          perspective: '500px',
          perspectiveOrigin: '50% 100%',
          transition: 'all 0.3s',

          '&.open': {
            transform: 'rotateX(0)',
          },

          '& button': {
            padding: '10px 0',
            fontSize: '0.5em',
          },
        },
      },
    },

    '& .bottom': {
      padding: '18px 0',
      borderTop: '0.5px solid rgba(255,255,255,0.6)',

      '& .bottomContent': {
        display: 'flex',
        justifyContent: 'center',

        '& span': {
          fontWeight: 300,
          textAlign: 'center',
          fontSize: '0.57em',
        },
      },
    },
  },
}))
export default useStyles
