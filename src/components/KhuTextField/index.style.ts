import { makeStyles } from '@mui/styles'
import getFont from '../../theme/font'

const useStyles = makeStyles((theme) => ({
  textFieldContainer: {
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    position: 'relative',
    minHeight: 45,
    width: '100%',
    fontSize: 16,
    border: '1.5px solid #DADCE0',
    borderRadius: 4,
    paddingLeft: 8,

    '&:hover': {
      borderColor: '#000',
    },

    '&.focused': {
      borderColor: theme.palette.primary.main,

      '& .label': {
        top: 0,
        right: 10,
        '&.ltr': {
          right: 'initial',
          left: 10,
        },
        zIndex: 10,
        fontSize: '87.5%',
        fontWeight: 400,
        color: theme.palette.primary.main,
      },

      '& .input': {
        '&::placeholder': {
          visibility: 'initial',
        },
      },
    },

    '& .input': {
      position: 'relative', // for z-index
      height: '100%',
      // width: '85%',
      // '&.fullWidth': {
      //   width: '100%',
      // },
      flex: 1,
      border: 0,
      padding: '0 13px',
      outline: 0,
      zIndex: 1,
      fontFamily: getFont(),
      background: 'transparent',
      fontSize: 'inherit',

      '&::placeholder': {
        color: '#aaa',
        visibility: 'hidden',
      },

      '&:focus ~ .label, &.hasValue ~ .label': {
        top: 0,
        right: 10,
        '&.ltr': {
          right: 'initial',
          left: 10,
        },
        zIndex: 10,
        fontSize: '87.5%',
        fontWeight: 400,
        color: theme.palette.primary.main,
      },

      '&:focus::placeholder': {
        visibility: 'initial',
      },
    },

    '& .label': {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      right: 13,
      '&.ltr': {
        right: 'initial',
        left: 13,
      },
      transform: 'translateY(-50%)',
      padding: '0 5px',
      backgroundColor: '#fff',
      color: '#aaa',
      transition: 'all 0.2s',
      zIndex: 0,
      fontWeight: 400,
      fontSize: 'inherit',
      maxWidth: '90%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      userSelect: 'none',
    },

    '& .textarea': {
      resize: 'vertical',
      padding: '12px 13px',

      '&.fullWidth': {
        width: '100%',
      },
    },

    '& .adornment': {
      display: 'inline-block',
      fontWeight: 400,
      width: '15%',
      overflow: 'hidden',
      textAlign: 'center',
      userSelect: 'none',

      '& > span': {
        fontSize: '80%',
        fontWeight: 400,
        color: '#000',
      },
    },
  },
}))

export default useStyles
