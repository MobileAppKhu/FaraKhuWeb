import { makeStyles } from '@mui/styles'
import bgImg from '../../assets/images/khu_env_min.jpg'

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    background: `#eee url("${bgImg}") no-repeat fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  innerContainer: {
    color: '#000',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5rem 0',
  },
  infoCardContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    width: '60%',
    [theme.breakpoints.down(1200)]: {
      width: '70%',
    },
    [theme.breakpoints.down(1000)]: {
      width: '80%',
    },
    [theme.breakpoints.down(840)]: {
      width: '85%',
    },
    borderTopLeftRadius: 10,
    transition: 'all 0.3s',

    '& .editButton': {
      position: 'absolute',
      top: -20,
      right: -20,
      width: 60,
      height: 60,
      borderRadius: 7,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.primary.light,
      boxShadow: '3px 3px 4px 0 rgba(0, 0, 0, 0.35)',
      border: `0.5px solid ${theme.palette.primary.main}`,
    },

    '& .role': {
      position: 'absolute',
      left: -20,
      top: 45,
      background: theme.palette.primary.onContainer,
      width: 'auto',
      padding: '20px 20px',
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      color: theme.palette.primary.light,
      transform: 'rotate(-90deg)',
      transition: 'all 0.3s',

      [theme.breakpoints.down(450)]: {
        left: -25,
        padding: '12px 20px',
        fontWeight: 200,
        fontSize: 18,
      },
    },

    '& .top': {
      display: 'flex',
      borderTopLeftRadius: 10,
      [theme.breakpoints.down(740)]: {
        flexDirection: 'column',
      },

      '& .right': {
        display: 'flex',
        [theme.breakpoints.down(740)]: {
          display: 'block',
        },
        flex: 2.5,
        background: theme.palette.primary.light,
        boxShadow: '4px 7px 12px 0 rgb(0 0 0 / 33%)',

        '& .rightContent': {
          background: '#f1f0f4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px 20px',
          borderTopLeftRadius: 35,
          [theme.breakpoints.down(740)]: {
            borderTopLeftRadius: 0,
          },

          '& .imageName': {
            display: 'flex',
            flexDirection: 'column',
            '& img': {
              objectFit: 'cover',
              width: 200,
              height: 200,
              [theme.breakpoints.down(400)]: {
                width: 160,
                height: 160,
              },

              borderRadius: 15,
              transition: 'all 0.3s',
            },
            '& .name': {
              textAlign: 'center',
              fontWeight: 500,
              marginTop: 15,
              color: theme.palette.primary.onContainer,
            },
          },

          '& .aboutMe': {
            fontWeight: 'normal',
            textAlign: 'center',
            fontSize: 14,
            color: theme.palette.primary.onContainer,
            marginTop: 35,
          },
        },
      },

      '& .left': {
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.primary.light,
        padding: 40,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 5,
        [theme.breakpoints.down(740)]: {
          borderTopLeftRadius: 0,
        },
        [theme.breakpoints.down(450)]: {
          borderBottomLeftRadius: 0,
          boxShadow: '4px 7px 12px 0 rgb(0 0 0 / 33%)',
        },

        '& .emailId': {
          display: 'flex',
          flexDirection: 'column',
          rowGap: 20,

          '& .item': {
            display: 'flex',
            alignItems: 'center',
            columnGap: 10,

            '& .email': {
              fontSize: 18,
              [theme.breakpoints.down(900)]: {
                fontSize: 16,
              },
              transition: 'font-size 0.3s',
            },
          },
        },

        '& .separator': {
          width: '95%',
          height: 1,
          background: '#73777f',
          opacity: 0.4,
          marginTop: 40,
          marginBottom: 20,
        },

        '& .favorites': {
          '& ul': {
            display: 'flex',
            flexWrap: 'wrap',
            [theme.breakpoints.down(450)]: {
              flexWrap: 'initial',
              flexDirection: 'column',
            },
            rowGap: 20,
            columnGap: 30,
            padding: 0,
            margin: '20px 0 0 0',

            '& li': {
              listStyle: 'none',
              display: 'flex',
              alignItems: 'center',
              columnGap: 10,
              width: '40%',
              [theme.breakpoints.down(450)]: {
                width: '100%',
              },

              '& .itemName': {
                fontWeight: 500,
                color: '#000',
                transition: 'all 0.3s',
                [theme.breakpoints.down(450)]: {
                  fontSize: 14,
                },
              },

              '& .itemBullet': {
                display: 'block',
                background: theme.palette.primary.main,
                width: 12,
                height: 12,
                borderRadius: '50%',
              },
            },
          },
        },
      },
    },

    '& .bottom': {
      display: 'flex',
      height: 80,
      [theme.breakpoints.down(450)]: {
        flexDirection: 'column',
        height: 'initial',
      },

      '& .socialMedia': {
        width: '91%',
        [theme.breakpoints.down(1285)]: {
          width: '88%',
        },
        [theme.breakpoints.down(740)]: {
          width: '85%',
        },
        [theme.breakpoints.down(600)]: {
          width: '80%',
        },
        [theme.breakpoints.down(500)]: {
          width: '75%',
        },
        [theme.breakpoints.down(450)]: {
          width: '100%',
          height: 60,
          boxShadow: '4px 7px 12px 0 rgb(0 0 0 / 33%)',
        },
        background: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 50,
        [theme.breakpoints.down(600)]: {
          columnGap: 30,
        },
        boxShadow: '4px 5px 12px 0 rgb(0 0 0 / 31%)',
        transition: 'all 0.3s',

        '& .icon': {
          color: theme.palette.primary.light,
          fontSize: 50,
          [theme.breakpoints.down(600)]: {
            fontSize: 40,
          },
          transition: 'all 0.3s',
        },
      },

      '& .exitButtonContainer': {
        width: '9%',
        [theme.breakpoints.down(1285)]: {
          width: '12%',
        },
        [theme.breakpoints.down(740)]: {
          width: '15%',
        },
        [theme.breakpoints.down(600)]: {
          width: '20%',
        },
        [theme.breakpoints.down(500)]: {
          width: '25%',
        },
        display: 'flex',
        [theme.breakpoints.down(450)]: {
          display: 'none',
        },
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        position: 'relative',
        transition: 'width 0.3s',

        '& .exitButton': {
          width: '90%',
          height: '93%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          borderTopRightRadius: 20,
          border: `1px solid ${theme.palette.primary.main}`,
          position: 'absolute',
          left: 0,
          bottom: 0,
          boxShadow: '3px 3px 3px 0 rgb(0 0 0 / 40%)',
        },

        '& .icon': {
          color: theme.palette.primary.main,
          fontSize: 40,
        },
      },

      '& .fullWidthExitButton': {
        display: 'none',
        [theme.breakpoints.down(450)]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          border: `1px solid ${theme.palette.primary.main}`,
          boxShadow:
            '4px 0px 12px 0 rgb(0 0 0 / 33%), 0px 2px 5px 0 rgb(0 0 0 / 30%)',
        },
        height: 60,
        padding: 10,
        columnGap: 5,
        borderRadius: 0,
        transition: 'width 0.3s',

        '& span': {
          color: theme.palette.primary.main,
          fontWeight: 500,
          fontSize: 25,
        },

        '& .icon': {
          color: theme.palette.primary.main,
          fontSize: 35,
        },
      },
    },
  },
}))

export default useStyles
