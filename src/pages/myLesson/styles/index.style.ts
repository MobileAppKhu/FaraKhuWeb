import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
   display: 'grid',
   gridTemplateColumns: '1fr 1fr 1fr',
   width: '100%',
flexDirection: 'row-reverse',
  //  height: 200,
   margin: 20,
    // marginTop: 200,
    backgroundColor: '#ffffff',
  },
}))
export default useStyles
