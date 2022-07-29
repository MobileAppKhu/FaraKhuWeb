import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
    position: 'relative', // required for z-index to work
    zIndex: 2, // in order for box-shadow to work between two divs

    '&.roundCorner': {
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.19)',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    justifyContent: 'space-between',
  },
  menuIcon: {
    display: 'none',
    [theme.breakpoints.down(1100)]: {
      display: 'flex',
      alignItems: 'center',
      columnGap: 10,
    },
  },
  imgContainer: {
    width: 193,
    height: 62,
    [theme.breakpoints.down(390)]: {
      display: 'none',
    },
  },
  img: {
    width: 193,
    height: 62,
  },
  khuLogo: {
    display: 'none',
    width: 55,
    [theme.breakpoints.down(390)]: {
      display: 'block',
    },
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down(610)]: {
      display: 'none',
    },
  },
  lightIcon: {
    // fontSize: 37,
  },
  darkIcon: {
    // fontSize: 30,
  },
  isSelectedIcon: {
    color: '#1660a5',
  },
  isNotSelectedIcon: {
    color: '#545f70',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 50,
    '& .navItem': {
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent !important', // disable blue highlight on click on links in chrome mobile

      '&.active': {
        '& span': {
          fontWeight: 600,
          color: theme.palette.primary.main,
        },
      },
    },
    transition: 'top 0.3s, z-index 1s ,column-gap 0.45s',

    [theme.breakpoints.down(1312)]: {
      columnGap: 24,
    },
    [theme.breakpoints.down(1135)]: {
      columnGap: 10,
    },
    [theme.breakpoints.down(1100)]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      rowGap: 5,
      width: 'auto',
      minWidth: '50%',
      position: 'absolute',
      padding: 20,
      borderRadius: 5,
      background: '#fff',
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
      top: -280,
      zIndex: -1,

      '& > .navItem': {
        textAlign: 'center',
        width: '100%',
      },

      '& button': {
        width: '100%',
        padding: '10px 0',
      },
    },
    [theme.breakpoints.down(500)]: {
      minWidth: '70%',
    },
  },
  openMenu: {
    zIndex: 1,
    top: 110,
    transition: 'top 0.3s, z-index 0s, column-gap 0.45s',
  },
  switchContainerInsideMenu: {
    display: 'none !important',
    [theme.breakpoints.down(610)]: {
      display: 'flex !important',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  loginButton: {
    width: 160,
    height: 45,
    borderRadius: '13px !important',
    '&:hover': {
      backgroundColor: '#1660a5 !important',
    },
    [theme.breakpoints.down(500)]: {
      display: 'none !important',
    },
  },
  loginIconButton: {
    display: 'none !important',
    [theme.breakpoints.down(500)]: {
      display: 'flex !important',
    },
  },
  loginButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  },
  floating: {},
}))

export default useStyles
