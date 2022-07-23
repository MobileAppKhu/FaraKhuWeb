import { makeStyles } from '@mui/styles'
import bgImg from '../../assets/images/khu_env_min.jpg'

const useStyles = makeStyles((theme) => ({
  container: {
    color: '#000',
    background: `#eee url("${bgImg}") no-repeat fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoCardContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    width: '60%',
    borderTopLeftRadius: 10,

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
    },

    '& .top': {
      display: 'flex',
      borderTopLeftRadius: 10,

      '& .right': {
        display: 'flex',
        flex: 2.5,
        background: theme.palette.primary.light,
        boxShadow: '4px 7px 12px 0 rgb(0 0 0 / 33%)',
      },

      '& .rightContent': {
        background: '#f1f0f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 20px',
        borderTopLeftRadius: 35,

        '& .imageName': {
          display: 'flex',
          flexDirection: 'column',
          '& img': {
            objectFit: 'cover',
            width: 200,
            height: 200,
            borderRadius: 15,
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

      '& .left': {
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.primary.light,
        padding: 40,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 5,

        '& .emailId': {
          display: 'flex',
          flexDirection: 'column',
          rowGap: 20,

          '& .item': {
            display: 'flex',
            alignItems: 'center',
            columnGap: 25,
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
              fontWeight: 500,

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

      '& .socialMedia': {
        width: '91%',
        background: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 50,
        boxShadow: '4px 5px 12px 0 rgb(0 0 0 / 31%)',

        '& .icon': {
          color: theme.palette.primary.light,
          fontSize: 50,
        },
      },

      '& .exitButtonContainer': {
        width: '9%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderTopRightRadius: 20,

        position: 'relative',

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
    },
  },
}))

export default useStyles
