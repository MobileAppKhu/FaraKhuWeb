import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    position: 'relative',
    fontSize: 16,
  },
  selectContainer: {
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent !important', // disable blue highlight on click on links in chrome mobile
    color: '#000',

    '& *': {
      fontSize: '1em',
    },

    '& .input': {
      cursor: 'pointer',
      userSelect: 'none',
      pointerEvents: 'none',
    },
  },
  arrowDropDownIcon: {
    transform: 'rotate(0deg)',
    transition: 'all 0.3s',

    '&.open': {
      transform: 'rotate(-180deg)',
      transition: 'all 0.3s',
    },
  },
  optionsContainer: {
    width: '100%',
    position: 'absolute',
    top: '102%',
    borderRadius: 4,
    zIndex: 2,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '1px 2px 5px 0 rgb(0 0 0 / 18%)',
    pointerEvents: 'none',
    transformOrigin: 'top center',
    transform: 'rotateX(-90deg)',
    transition: 'all 0.2s',

    '&.open': {
      transform: 'rotateX(0deg)',
      pointerEvents: 'initial',
    },

    '& ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,

      '& li button': {
        width: '100%',
        borderRadius: 0,
        fontSize: '1em',
      },
    },
  },
}))

export default useStyles
