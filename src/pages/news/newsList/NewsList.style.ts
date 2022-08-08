import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1,
    background: theme.palette.background.paper,

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 50,
      padding: '60px 0',

      '& .createNews': {
        display: 'flex',
        columnGap: 10,
        alignSelf: 'flex-start',
        fontSize: '1.2em',
        fontWeight: 400,
      },

      '& .news': {
        display: 'flex',

        '& > .left': {
          transition: 'all 0.45s',
        },

        '& > .right': {
          display: 'flex', // to take the full height
          justifyContent: 'center',
          transition: 'all 0.45s',
        },
      },

      '& .pagination': {
        display: 'flex',
        justifyContent: 'center',

        '& .Mui-selected': {
          background: theme.palette.primary.dark,
          fontWeight: 'bold',
        },
      },
    },
  },
}))

export default useStyle
