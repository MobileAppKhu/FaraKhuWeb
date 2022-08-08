import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  background: {
    flex: 1,
    background: theme.palette.background.paper,

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 20,
      margin: '80px 20%',
      padding: 20,
      borderRadius: 5,
      boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.15)',
      fontSize: 18,

      [theme.breakpoints.down(800)]: {
        margin: '80px 5%',
      },
      [theme.breakpoints.down(450)]: {
        margin: '80px 0',
      },

      '& > .tabs': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        columnGap: '5%',
        padding: '0 5%',

        '& .tabTitle': {
          flex: 1,
          fontSize: '1.5em',
          borderRadius: 10,

          '&.active': {
            fontWeight: 400,
            background: theme.palette.primary.main,
            color: theme.palette.primary.light,
          },
        },
      },

      '& > .selectLesson': {
        padding: '0 5%',
        margin: '15px 0',
      },

      '& > .items': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 180,
        gridAutoRows: 180,
        gap: '15px 20px',

        '& .coloredItem': {
          background: theme.palette.surface.variant,
        },
      },
    },
  },
}))

export default useStyle
