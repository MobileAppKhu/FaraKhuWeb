import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  titleLesson: {
    justifyContent: 'space-between',
    fontSize: 32,
    fontWeight: 'bold',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    paddingRight: 15,
  },
  cardDes: {
    flexDirection: 'row-reverse',
    display: 'flex',
    columnGap: 10,
  },
  cardLesson: {
    backdropFilter: 'blur(4px)',
    width: 320,
    height: 100,
  },
  teacherName: {
    fontSize: 16,
    alignItems: 'flex-end',
    textAlign: 'left',
    paddingLeft: 15,
  },
  lessonImage: {
    width: 320,
    height: 320,

  },
  teacherImagestyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
}))
export default useStyles
