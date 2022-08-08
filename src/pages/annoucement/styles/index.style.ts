import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: '40px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  annoucementItemContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    rowGap: 30,
    columnGap: 60,
  },
  paginationContainer: {
    marginTop: 30,
  },
}))
export default useStyles
