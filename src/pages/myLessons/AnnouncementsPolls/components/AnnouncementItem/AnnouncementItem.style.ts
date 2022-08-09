import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 40,
    borderRadius: 10,
    padding: 15,
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.17)',
    background: theme.palette.background.paper,
    fontSize: '1em',
    height: 180,
    transition: 'all 0.3s',

    '&.coloredItem': {
      background: theme.palette.surface.variant,
    },

    '&.showDesc': {
      height: 375,
    },

    '& .overview': {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: 5,

      '& .details': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        color: theme.palette.primary.onContainer,

        '& *': {
          color: 'inherit',
        },

        '& .typeTitle': {
          '& .type': {
            display: 'block',
            fontSize: '0.88888em',
            fontWeight: 500,
          },

          '& .title': {
            display: '-webkit-box',
            overflow: 'hidden',
            fontSize: '0.88888em',
            fontWeight: 600,
            textOverflow: 'ellipsis',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          },
        },

        '& .dateDetails': {
          display: 'flex',
          columnGap: 3,

          '& > .date, > .interval': {
            fontSize: '0.7em',

            '&.error': {
              color: theme.palette.error.main,
            },
          },

          '& > .interval': {
            fontWeight: 500,
          },
        },
      },

      '& .expandIcon': {
        '&.hidden': {
          visibility: 'hidden',
        },

        '& > button': {
          transition: 'all 0.5s',

          '&.close': {
            transition: 'all 0.5s',
            transform: 'rotate(180deg)',
          },
        },
      },
    },

    '& .desc': {
      color: theme.palette.primary.onContainer,
      height: 0,
      opacity: 0,
      position: 'absolute',
      overflowY: 'auto',

      '&.open': {
        flex: 1,
        height: 'initial',
        opacity: 1,
        position: 'static',
        transition: 'opacity 0.8s',
      },

      '& > span': {
        display: 'block',
        userSelect: 'none',
        marginBottom: 10,
      },
    },
  },
}))

export default useStyle
