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
      transition: 'all 0.3s',

      [theme.breakpoints.down(770)]: {
        padding: '60px 3%',
      },
      [theme.breakpoints.down(450)]: {
        rowGap: 50,
        fontSize: 16,
      },

      '& .inputContainer': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        columnGap: 30,
        fontSize: '1em',
        transition: 'all 0.3s',

        [theme.breakpoints.down(450)]: {
          flexDirection: 'column',
          alignItems: 'stretch',
          rowGap: 10,
        },

        '& > .title': {
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          fontSize: '1em',
        },

        '& .input': {
          flex: 1,

          '& > *': {
            fontSize: '0.88889em',
          },

          '& fieldset': {
            borderRadius: 7,
          },

          '& input': {
            fontSize: '1em',
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

        '&.description': {
          flexDirection: 'column',
          alignItems: 'flex-start',
          rowGap: 10,

          '& .textEditorWrapper': {
            border: '1px solid #c4c4c4',
            color: '#000',
          },

          '& .textEditorToolbar': {
            borderBottom: '1px solid #c4c4c4',
            direction: 'ltr',

            '& .toolbar_blockType, .toolbar_fontFamily': {
              fontFamily: 'Roboto',
            },
          },

          '& .textEditorContent': {
            padding: '0 10px',
            minHeight: 200,
            maxHeight: 550,
          },
        },
      },

      '& .confirmButton': {
        width: 300,
        fontSize: '1em',
        fontWeight: 400,
        borderRadius: 7,
        alignSelf: 'center',
        transition: 'width 0.3s',

        [theme.breakpoints.down(450)]: {
          width: '80%',
        },
      },
    },
  },
}))

export default useStyle
