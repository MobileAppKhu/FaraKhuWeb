import { getTranslate } from '../../localization'
import StudentsTable from './StudentsTable'
import './styles/myLessonEdit.css'

const lessonsData = [{
  examLoc: 'Bellgrove',
  classTime: '8:49',
  examTime: '1/14/2022',
  className: 'Funk-Powlowski',
}, {
  examLoc: 'Harbort',
  classTime: '16:49',
  examTime: '8/24/2021',
  className: 'Cassin Inc',
}, {
  examLoc: 'Delaware',
  classTime: '12:58',
  examTime: '1/10/2022',
  className: 'Schuppe-Harris',
}, {
  examLoc: 'Annamark',
  classTime: '9:37',
  examTime: '6/3/2022',
  className: 'Zulauf Inc',
}, {
  examLoc: 'Leroy',
  classTime: '10:08',
  examTime: '5/15/2022',
  className: 'Denesik-Torphy',
}, {
  examLoc: 'Drewry',
  classTime: '16:38',
  examTime: '8/1/2022',
  className: 'Quitzon-Cummings',
}, {
  examLoc: 'Sunfield',
  classTime: '9:27',
  examTime: '3/12/2022',
  className: 'Bins-Bartoletti',
}, {
  examLoc: 'Lakewood',
  classTime: '15:16',
  examTime: '10/19/2021',
  className: 'Bogan-Bosco',
}]
const MyLessonEdit = () => {
    console.log('Hi1')
    return (

      <div className="outer-container">
        {lessonsData.map((lesson) => (
          <div className="class-info">
            <div className="class-time">{lesson.classTime}</div>
            <div className="exam-time">{lesson.examTime}</div>
            <div className="exam-location">{lesson.examLoc}</div>
          </div>
        ))}

        <div className="table-container">
          <h2>{getTranslate(':لیست دانشجویان')}</h2>
          <StudentsTable />
        </div>
      </div>
    )
}
export default MyLessonEdit
