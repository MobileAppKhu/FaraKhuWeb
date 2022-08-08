import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  titleLesson: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  teacherName: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  lessonImage: {
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  teacherImage: {
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
}))
export default useStyles
