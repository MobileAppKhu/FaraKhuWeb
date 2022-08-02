import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.background.paper,
  },
  container: {
    width: '100%',
    padding: '200px 0',
    fontSize: 18,

    '& .sliderContainer': {
      width: '100%',
      background: theme.palette.surface.variant,
      height: 240,
      position: 'relative',

      '& > .title': {
        background: theme.palette.primary.onContainer,
        width: 240,
        padding: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 3,
        left: 0,
        top: '50%',
        transform: 'translate(-37%, -50%) rotate(-90deg)',
        fontSize: '1em',

        '& .text': {
          color: theme.palette.primary.light,
          fontWeight: 400,
          fontSize: '1.1em',
        },
      },

      '& .systemsSlider': {
        width: '100%',
        height: '100%',
        cursor: 'grab',

        '&:active': {
          cursor: 'grabbing',
        },

        '& .alice-carousel': {
          display: 'flex',
          height: '100%',
          width: '100%',

          '& > div': {
            display: 'flex',
            width: '100%',
            height: '100%',
          },

          '& li': {
            transition: 'all 0.3s',
          },
        },

        '& .sliderItem': {
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          rowGap: 30,
          padding: '0px 20px',
          borderRight: '1px solid #bbb',
          transition: 'all 0.3s',

          '&:hover': {
            background: '#bcc7db',
          },

          '& > .url': {
            color: theme.palette.primary.onContainer,
            fontSize: '1.1em',
            fontWeight: 600,
            marginTop: 60,
            textDecoration: 'none',
            cursor: 'pointer',
            userSelect: 'none',
            overflowWrap: 'anywhere',
          },

          '& > .systemTitle': {
            color: '#7a7e76',
            fontSize: '1em',
            userSelect: 'none',
            overflowWrap: 'anywhere',
          },
        },
      },
    },
  },
}))
export default useStyles
