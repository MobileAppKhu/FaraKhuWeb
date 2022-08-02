import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: 451,
    height: 399,
    padding: '13px 14px 12px 15px',
    border: 'solid 1px rgba(112, 112, 112, 0.4)',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  imgContainer: {
    width: 374,
    height: 234,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  teacherName: {
    width: 150,
    height: 36,
    padding: '6px 8px',
    border: 'solid 1px #1660a5',
    fontSize: 14,
    colot: '#1660a5',
  },
}))
export default useStyles
