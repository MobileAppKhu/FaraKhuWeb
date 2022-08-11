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
    flexDirection: 'column',
  },
  imgContainer: {
    width: '100%',
    height: 234,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#000 !important',
  },
  teacherName: {
    width: 150,
    height: 36,
    padding: '6px 8px',
    border: 'solid 1px #1660a5',
    fontSize: 14,
    color: '#1660a5 !important',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  creatorImgContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  teacherNameText: {
    color: '#1660a5 !important',
  },
  teacherNameContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}))
export default useStyles
