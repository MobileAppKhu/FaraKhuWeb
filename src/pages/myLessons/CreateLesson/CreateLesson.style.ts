import { makeStyles } from '@mui/styles'
import bgImg from '../../../assets/images/khu_env_min.jpg'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1,
    background: `#eee url("${bgImg}") no-repeat fixed`,
    backgroundSize: 'cover',

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 20,
      margin: '80px 10%',
      padding: 40,
      position: 'relative',
      borderRadius: 5,
      background: theme.palette.background.paper,
      boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.15)',
      fontSize: 18,
      transition: 'all 0.3s',

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

          '&.textarea': {
            width: '100%',
          },

          '&.iamgePickerContainer': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },

          '& .iamgePicker': {
            width: '30%',
            aspectRatio: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            overflow: 'hidden',
            background: '#c4c4c4',
            cursor: 'pointer',
            position: 'relative',
            fontSize: '1em',
            WebkitTapHighlightColor: 'transparent',

            '& input': {
              display: 'none',
            },

            '& svg': {
              fontSize: '5em',
              transition: 'all 0.3s',

              [theme.breakpoints.down(1000)]: {
                fontSize: '3em',
              },
              [theme.breakpoints.down(400)]: {
                fontSize: '2em',
              },
            },

            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'opacity(40%)',
            },

            '& .deleteIcon': {
              color: '#fff',
              position: 'absolute',
              top: 10,
              left: 10,
              transition: 'all 0.3s',

              [theme.breakpoints.down(700)]: {
                top: 0,
                left: 0,
              },

              '& svg': {
                fontSize: '2em',
                [theme.breakpoints.down(700)]: {
                  fontSize: '1.7em',
                },
                [theme.breakpoints.down(600)]: {
                  fontSize: '1.4em',
                },
              },
            },
          },
        },

        '& .days': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: 20,

          '& .dayItem': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: 15,

            '& span': {
              fontSize: '0.9em',
            },

            '& .selectDay': {
              width: '28%',
            },
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
  },
}))

export default useStyle
