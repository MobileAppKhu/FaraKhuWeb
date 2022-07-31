import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 7,
    border: '1px solid rgba(112, 112, 112, 0.4)',
    background: 'transparent',
    color: theme.palette.secondary.dark,
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s',

    '&:hover, &:focus': {
      background: theme.palette.primary.dark,
      outline: 0,
    },

    [theme.breakpoints.down(1100)]: {
      fontSize: 15,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down(420)]: {
      fontSize: 17,
    },

    [theme.breakpoints.down(380)]: {
      fontSize: 17,
      flexDirection: 'column-reverse',
      alignItems: 'center',
      rowGap: 15,
    },

    '& .desc': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      rowGap: 20,
      padding: '0 5px',
      color: 'inherit',

      [theme.breakpoints.down(380)]: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 15,
      },

      '& .title': {
        color: 'inherit',
        fontSize: '1em',
        fontWeight: 400,
        overflowWrap: 'anywhere',

        [theme.breakpoints.down(380)]: {
          textAlign: 'center',
        },
      },

      '& .price': {
        display: 'flex',
        alignItems: 'center',
        columnGap: 5,
        fontWeight: 500,
        overflowWrap: 'anywhere',

        '& span': {
          color: 'inherit',
          fontWeight: 'inherit',
          fontSize: '0.888888em',
        },
      },
    },

    '& .img': {
      width: 150,
      height: 150,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0.5px solid rgba(112, 112, 112, 0.4)',
      borderRadius: 7,
      overflow: 'hidden',
      background: theme.palette.surface.variant,
      transition: 'all 0.3s',

      [theme.breakpoints.down(1100)]: {
        width: 120,
        height: 120,
      },
      [theme.breakpoints.down('sm')]: {
        width: 180,
        height: 180,
      },
      [theme.breakpoints.down(420)]: {
        width: 120,
        height: 120,
      },
      [theme.breakpoints.down(380)]: {
        width: '100%',
        height: 'auto',

        '&.noImg': {
          aspectRatio: 1.5,
        },
      },

      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
  },
}))

export default useStyle
