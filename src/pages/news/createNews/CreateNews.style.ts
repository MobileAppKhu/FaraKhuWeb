import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1,
    background: theme.palette.background.paper,

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 80,
      padding: '60px 10%',
      fontSize: 18,

      '& .inputContainer': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        columnGap: 30,

        '& > .title': {
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          fontSize: '1em',
        },

        '& .input': {
          flex: 1,

          '& fieldset': {
            borderRadius: 7,
          },

          '& input': {
            padding: '10px 15px',
          },
        },

        '& .imagePickers': {
          '& .iamgePicker': {
            width: '100%',
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

            '& input': {
              display: 'none',
            },

            '& svg': {
              fontSize: '5em',
              transition: 'all 0.3s',

              [theme.breakpoints.down(1000)]: {
                fontSize: '3em',
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
      },
    },
  },
}))

export default useStyle
