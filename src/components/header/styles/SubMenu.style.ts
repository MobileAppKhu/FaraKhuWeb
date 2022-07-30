import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  subMenu: {
    height: 0,
    opacity: 0,
    pointerEvents: 'none',
    columnGap: 30,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    transition: 'all 0.1s',

    '&.open': {
      height: 70,
      opacity: 1,
      pointerEvents: 'initial',
      transition: 'all 0.3s',

      [theme.breakpoints.down(885)]: {
        height: 95,
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 5,
      },
      [theme.breakpoints.down(380)]: {
        paddingTop: 8,
        height: 145,
      },
    },

    '& > .right': {
      flex: 1.5,
      display: 'flex',
      alignItems: 'center',
      fontSize: 18,
      transition: 'all 0.3s',

      [theme.breakpoints.down(1070)]: {
        fontSize: 16,
      },
      [theme.breakpoints.down(986)]: {
        fontSize: 15,
      },
      [theme.breakpoints.down(960)]: {
        fontSize: 16,
      },
      [theme.breakpoints.down(885)]: {
        fontSize: 18,
        flex: 'initial',
        width: '70%',
      },
      [theme.breakpoints.down(781)]: {
        width: '90%',
      },
      [theme.breakpoints.down(620)]: {
        width: '100%',
      },
      [theme.breakpoints.down(565)]: {
        fontSize: 16,
      },
      [theme.breakpoints.down(420)]: {
        fontSize: 14,
      },

      '& .nav': {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        [theme.breakpoints.down(380)]: {
          flexWrap: 'wrap',
          justifyContent: 'center',
        },

        '& .navItem': {
          textDecoration: 'none',
          WebkitTapHighlightColor: 'transparent !important', // disable blue highlight on click on links in chrome mobile

          [theme.breakpoints.down(380)]: {
            width: '50%',
          },

          '& button': {
            fontSize: 'inherit',
            [theme.breakpoints.down(380)]: {
              width: '100%',
            },

            '& span': {
              color: theme.palette.primary.onContainer,
              fontSize: 'inherit',
            },
          },

          '&.active': {
            '& button': {
              backgroundColor: theme.palette.primary.main,
            },
            '& span': {
              fontWeight: 300,
              color: theme.palette.primary.light,
            },
          },
        },
      },
    },

    '& .verticalSeparator': {
      width: 1.5,
      height: '80%',
      alignSelf: 'center',
      background: theme.palette.surface.variant,

      [theme.breakpoints.down(885)]: {
        height: 1.5,
        width: '30%',
      },
    },

    '& > .left': {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: theme.palette.primary.onContainer,
      fontSize: 18,
      transition: 'all 0.3s',

      [theme.breakpoints.down(1150)]: {
        fontSize: 16,
      },
      [theme.breakpoints.down(1070)]: {
        fontSize: 14,
      },
      [theme.breakpoints.down(986)]: {
        fontSize: 13,
      },
      [theme.breakpoints.down(960)]: {
        fontSize: 14,
      },
      [theme.breakpoints.down(885)]: {
        fontSize: 16,
        flex: 'initial',
      },
      [theme.breakpoints.down(565)]: {
        fontSize: 15,
      },
      [theme.breakpoints.down(420)]: {
        fontSize: 13,
      },
      [theme.breakpoints.down(337)]: {
        fontSize: 12,
      },

      '& .otherSystemsTitle': {
        display: 'none',
      },

      '& .item': {
        display: 'flex',
        alignItems: 'flex-start',
        columnGap: 5,
        fontSize: 'inherit',
        color: 'inherit',
        textAlign: 'center',

        '& .itemIcon': {
          fontSize: '120%',
          [theme.breakpoints.down(337)]: {
            display: 'none',
          },
        },
        '& .itemLabel': {
          color: 'inherit',
          fontWeight: 400,
          fontSize: '100%',
        },
      },
    },

    '&.floating': {
      position: 'absolute',
      top: '230%',
      background: theme.palette.primary.light,
      width: 0, // in order not to mess up responsive layout
      display: 'flex',
      padding: 10,
      transition: 'all 0s',

      [theme.breakpoints.down(1100)]: {
        position: 'initial',
        padding: 0,
        flexDirection: 'column',
        paddingBottom: '7px',
        borderBottom: '1px solid #bcbcbc',
        transition: 'height 0.3s',
      },

      '&.open': {
        width: 380,
        height: 250,
        borderRadius: '20px 0 20px 20px',
        boxShadow: '3px 2px 6px 0 rgb(0 0 0 / 33%)',
        pointerEvents: 'initial',
        transition: 'height 0.3s, opacity 0.3s',

        [theme.breakpoints.down(1100)]: {
          boxShadow: 'initial',
          borderRadius: 0,
          width: '100%',
          height: 330,
          flexDirection: 'column',
          alignItems: 'center',
        },
        [theme.breakpoints.down(320)]: {
          height: 380,
        },
      },

      '& > .right': {
        [theme.breakpoints.down(885)]: {
          fontSize: 16,
        },

        '& .nav': {
          flexDirection: 'column',
          alignItems: 'flex-start',
          rowGap: 10,

          [theme.breakpoints.down(1100)]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          },

          '& .navItem': {
            width: '100%',

            [theme.breakpoints.down(1100)]: {
              width: '50%',
            },

            '& span': {
              fontWeight: 'normal',
            },

            '& button': {
              columnGap: 7,
              width: '100%',
              justifyContent: 'flex-start',

              [theme.breakpoints.down(1100)]: {
                justifyContent: 'center',
              },
            },

            '& .svgContainer': {
              display: 'flex',
              textAlign: 'center',
              fontSize: '120%',

              '&.medium': {
                fontSize: '140%',
              },
              '&.large': {
                fontSize: '160%',
              },

              '& img.svg': {
                display: 'flex',
                height: 'inherit',
                width: 'inherit',
              },
            },
          },
        },
      },
      '& > .left': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        rowGap: 10,
        fontSize: 14,
        marginTop: 15,

        '& .otherSystemsTitle': {
          display: 'inline-block',
          alignSelf: 'center',
          fontWeight: 500,
          fontSize: '80%',
          color: '#73777f',
          marginBottom: 10,
        },

        '& .item': {
          width: '100%',
          justifyContent: 'flex-start',
          [theme.breakpoints.down(1100)]: {
            justifyContent: 'center',
          },
        },
      },
      '& > .verticalSeparator': {
        display: 'none',

        [theme.breakpoints.down(1100)]: {
          display: 'block',
          width: '30%',
          height: 1.5,
        },
      },
    },
  },
}))

export default useStyles
