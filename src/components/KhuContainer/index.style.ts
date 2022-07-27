import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 124px !important', // to align with the edges of the header
    [theme.breakpoints.down('lg')]: {
      padding: '0 74px !important',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 24px !important',
    },
  },
}))
export default useStyles
