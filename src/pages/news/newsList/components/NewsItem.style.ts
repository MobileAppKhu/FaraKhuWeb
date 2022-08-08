import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    transition: 'all 0.3s',

    [theme.breakpoints.down(1250)]: {
      fontSize: 15,
    },
    [theme.breakpoints.down(768)]: {
      fontSize: 18,
    },

    '&.coloredBg': {
      background: theme.palette.primary.dark,
    },

    '& .author': {
      display: 'flex',
      alignItems: 'center',
      columnGap: 5,

      '& .authorImg': {
        width: 30,
        height: 30,
        borderRadius: '50%',
        objectFit: 'contain',
      },

      '& .authorName': {
        color: theme.palette.primary.onContainer,
        fontSize: '0.7em',
      },
    },

    '& .details': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      rowGap: 7,
      padding: '0 20px',
      fontSize: '1em',

      [theme.breakpoints.down(768)]: {
        rowGap: 10,
      },

      '&.small': {
        padding: 0,
        fontSize: '0.8888em',
      },

      '&.medium': {
        fontSize: '0.8888em',
      },

      '& .newsImg': {
        display: 'flex',
        width: '100%',

        '& img': {
          width: '100%',
          objectFit: 'cover',
          borderRadius: 7,
        },
      },

      '& .title': {
        fontSize: '1em',
        lineHeight: 1.5,
        color: theme.palette.primary.onContainer,
        cursor: 'pointer',
      },

      '& .desc': {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: '0.7em',
        color: theme.palette.surface.onVariant,

        [theme.breakpoints.down(1250)]: {
          WebkitLineClamp: 3,
        },
      },

      '& .readMore': {
        alignSelf: 'flex-end',

        '& button': {
          fontWeight: 400,
          fontSize: '0.6em',
          color: theme.palette.primary.light,
          background: theme.palette.tertiary.main,
          borderRadius: 7,
          padding: '5px 15px',
        },
      },
    },
  },
}))

export default useStyle
