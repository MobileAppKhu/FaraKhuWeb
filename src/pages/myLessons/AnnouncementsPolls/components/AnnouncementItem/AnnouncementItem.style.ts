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
    fontSize: 18,
    transition: 'all 0.3s',

    '&.showDesc': {
      gridRowEnd: 'span 2',
    },

    '& .overview': {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      columnGap: 15,

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
            fontSize: '0.88888em',
            fontWeight: 500,
          },

          '& .title': {
            '& > span': {
              fontSize: '0.88888em',
              fontWeight: 600,
            },
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
          transition: 'all 0.2s',

          '&.close': {
            transition: 'all 0.2s',
            transform: 'rotate(180deg)',
          },
        },
      },
    },
    '& .desc': {
      display: 'none',
      color: theme.palette.primary.onContainer,

      '&.open': {
        flex: 1,
        display: 'flex',
      },
    },
  },
}))

export default useStyle
