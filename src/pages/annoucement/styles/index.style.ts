import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  annoucementItemContainer: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    rowGap: 30,
    columnGap: 60,
  },
  paginationContainer: {
    marginTop: 30,
  },
}))
export default useStyles
