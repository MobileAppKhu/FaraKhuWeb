import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1,
    background: theme.palette.background.paper,

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 0',
      fontSize: 18,

      '& .title': {
        color: theme.palette.surface.light,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '1.5em',
      },

      '& .separator': {
        width: 50,
        height: 2.5,
        borderRadius: 10,
        background: theme.palette.primary.main,
        margin: '15px 0',

        '&.gray': {
          background: '#73777f',
        },
      },

      '& .date': {
        color: theme.palette.secondary.main,
        fontSize: '0.7em',
      },

      '& .images': {
        width: '60%',
        height: 450,
        display: 'flex',
        justifyContent: 'center',
        margin: '30px 0',
        transition: 'all 0.3s',

        [theme.breakpoints.down(1000)]: {
          width: '80%',
        },
        [theme.breakpoints.down(600)]: {
          height: 300,
        },
        [theme.breakpoints.down(426)]: {
          width: '90%',
          height: 200,
        },

        '& .alice-carousel': {
          width: '100%',
          height: '100%',

          '& div': {
            width: '100%',
            height: '100%',
          },

          '& .alice-carousel__wrapper': {
            borderRadius: 7,

            '& li': {
              transition: 'all 0.3s',
            },
          },

          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },

          '& .alice-carousel__next-btn': {
            display: 'flex',
            width: 'initial',
            height: 'initial',
            position: 'absolute',
            top: '50%',
            right: 0,
            zIndex: 2,
            padding: 0,
            background: '#fff',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          },

          '& .alice-carousel__prev-btn': {
            display: 'flex',
            width: 'initial',
            height: 'initial',
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 2,
            padding: 0,
            background: '#fff',
            borderRadius: '50%',
            transform: 'translate(50%, -50%)',
          },

          '& .alice-carousel__dots': {
            display: 'flex',
            columnGap: 5,
            position: 'absolute',
            top: '99%',
            left: '50%',
            zIndex: 2,
            margin: 0,
            transform: 'translate(-50%, -130%)',

            '& li': {
              margin: 0,
              width: 10,
              height: 10,
              background: 'transparent',
              border: '1px solid #fff',

              '&.__active': {
                background: '#fff',
              },
            },
          },
        },
      },

      '& .desc': {
        padding: '0 10%',
        fontSize: '1em',
        lineHeight: 1.7,
        margin: '20px 0',
        color: theme.palette.primary.onContainer,

        [theme.breakpoints.down(426)]: {
          textAlign: 'justify',
        },
      },
    },
  },
}))

export default useStyle
