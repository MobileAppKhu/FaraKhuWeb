import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  chooseModalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'max-content',
    transform: 'translate(-50%, -50%)',
    background: theme.palette.primary.main,
    borderRadius: 10,
    outline: 0,
    overflow: 'hidden',
    border: '1px solid #fff',
    boxShadow: '1px 1px 10px -1px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 18,
    transition: 'all 0.4s !important',

    [theme.breakpoints.down(1000)]: {
      width: '60%',
    },
    [theme.breakpoints.down(780)]: {
      width: '70%',
    },

    [theme.breakpoints.down(500)]: {
      width: '90%',
      flexDirection: 'column',
    },

    '& .item': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 30,
      padding: '40px 60px',
      background: theme.palette.primary.main,
      fontSize: '1em',

      [theme.breakpoints.down(500)]: {
        padding: '40px 0',
      },

      '&:hover': {
        background: 'rgba(255,255,255,0.2)',
      },

      '& .title': {
        fontSize: '1.6em',
        fontWeight: 600,
        textAlign: 'center',
        margin: '0 10%',
      },

      '& .svgContainer': {
        display: 'flex',
        textAlign: 'center',
        fontSize: '3em',

        '& img.svg': {
          display: 'flex',
          height: 'inherit',
          width: 'inherit',
        },
      },
    },

    '& .divider': {
      display: 'flex',
      width: 1,
      background: '#fff',
    },
  },
}))

export default useStyle
