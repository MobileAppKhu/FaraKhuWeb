import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
   display: 'flex',
    // backgroundColor: '#ffffff',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 150,
    marginTop: 200,
  },
  root2: {
      display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    // backgroundColor: '#ffffff',
    columnGap: '150px',
    rowGap: '120px',
  },
}))
export default useStyles
