import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    padding: '0 121px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
  },
}))
export default useStyles
